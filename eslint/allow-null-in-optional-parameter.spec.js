import { RuleTester } from "@typescript-eslint/rule-tester";

import rule from "./allow-null-in-optional-parameter.js";

const ruleTester = new RuleTester();

ruleTester.run("allow-null-in-optional-parameter", rule, {
  valid: [
    `
    interface CreateAccountParams {
      email?: string | null; 
    }
    `,
  ],
  invalid: [
    {
      code: `
      interface CreateAccountParams {
        email?: string; 
      }
      `,
      errors: [
        {
          message: "Always use `T | null` for optional property",
        },
      ],
      output: `
      interface CreateAccountParams {
        email?: string | null; 
      }
      `,
    },
    {
      code: `
      interface CreateAccountParams {
        email: string | null; 
      }
      `,
      errors: [
        {
          message: "Mark nullable parameter as optional",
        },
      ],
      output: `
      interface CreateAccountParams {
        email?: string | null; 
      }
      `,
    },
  ],
});
