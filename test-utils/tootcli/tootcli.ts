export type CreateAccountParams = {
  readonly email: string;
  readonly confirmed: boolean;
};

export type CreateAccountResult = {
  password: string;
};

export interface Tootcli {
  accounts: {
    create: (
      username: string,
      params: CreateAccountParams,
    ) => Promise<CreateAccountResult>;
  };
}
