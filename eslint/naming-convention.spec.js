import { RuleTester } from "@typescript-eslint/rule-tester";

import rule from "./naming-convention.js";

const ruleTester = new RuleTester();

ruleTester.run("naming-convention", rule, {
  valid: [
    `
    interface FooResource {
      bar: FooBarResource;
    }
    `,
    `
    interface FooResource {
      $select(id: string): Foo$SelectResource;
    }
    `,
  ],
  invalid: [
    {
      code: `
        interface FooResource {
          bar: FooBazResource;  
        }
      `,
      errors: [
        {
          message: "FooResource#bar: FooBazResource is not FooBarResource",
        },
      ],
    },
    {
      code: `
        interface FooResource {
          $select(id: string): FooBazResource;  
        }
      `,
      errors: [
        {
          message:
            "FooResource#$select(): FooBazResource is not Foo$SelectResource",
        },
      ],
    },
  ],
});
