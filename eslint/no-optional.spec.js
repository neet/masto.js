import { RuleTester } from "@typescript-eslint/rule-tester";

import rule from "./no-optional.js";

const ruleTester = new RuleTester();

ruleTester.run("no-optional", rule, {
  valid: [
    `
    interface Account {
      email: string | null; 
    }
    `,
  ],
  invalid: [
    {
      code: `
      interface Account {
        email?: string | null; 
      }
      `,
      errors: [
        {
          message: "Do not use optional property. Use `T | null` instead.",
        },
      ],
      output: `
      interface Account {
        email: string | null; 
      }
      `,
    },
  ],
});
