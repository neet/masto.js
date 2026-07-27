import { RuleTester } from "@typescript-eslint/rule-tester";

import rule from "./separate-optional-nullable-property.js";

const ruleTester = new RuleTester();

ruleTester.run("separate-optional-nullable-property", rule, {
  valid: [
    `
    interface Account {
      discoverable: boolean | null;
      suspended?: boolean;
    }
    `,
  ],
  invalid: [
    {
      code: `
      interface Account {
        discoverable?: boolean | null;
      }
      `,
      errors: [
        {
          message: "Annotate optional and nullable entity properties separately",
        },
      ],
    },
  ],
});
