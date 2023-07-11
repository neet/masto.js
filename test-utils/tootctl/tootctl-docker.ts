import childProcess from "node:child_process";
import util from "node:util";

import {
  type CreateAccountParams,
  type CreateAccountResult,
  type Tootctl,
} from "./tootctl";

const exec = util.promisify(childProcess.exec);

const extractPassword = (stdout: string) => {
  return stdout.match(/New password:\s(.+?)$/)?.[1];
};

const stringifyArguments = (
  args: Record<string, string | number | boolean>,
): string => {
  return Object.entries(args)
    .map(([key, value]) => (value === true ? `--${key}` : `--${key}=${value}`))
    .join(" ");
};

export interface CreateTootctlParams {
  readonly container: string;
}

export const createTootctl = (params: CreateTootctlParams): Tootctl => {
  const { container } = params;

  return {
    accounts: {
      create: async (
        username: string,
        params: CreateAccountParams,
      ): Promise<CreateAccountResult> => {
        const args = stringifyArguments({ ...params });

        const { stdout } = await exec(
          [
            `docker exec ${container}`,
            `bash -c "RAILS_ENV=development bin/tootctl accounts create ${username} ${args}"`,
          ].join(" "),
        );

        const password = extractPassword(stdout.trim());
        if (password == undefined) {
          throw new Error("Couldn't extract password from stdout");
        }

        return { password };
      },
    },
  };
};
