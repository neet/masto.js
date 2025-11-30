import { pascalCase } from "change-case";

const REGEXP_RESOURCE_NAME = /^(.+?)Resource$/;

export default {
  meta: {
    type: "problem",
    schema: [],
    messages: {
      selector:
        "{{resourceName}}Resource#$select(): {{typeName}} is not {{expected}}",
      property:
        "{{resourceName}}Resource#{{keyName}}: {{typeName}} is not {{expected}}",
    },
  },

  create(context) {
    let resourceName;

    return {
      TSInterfaceDeclaration(node) {
        if (node.id.type !== "Identifier") {
          return;
        }

        const match = node.id.name.match(REGEXP_RESOURCE_NAME);
        resourceName = match?.[1];
      },

      "TSInterfaceDeclaration:exit"() {
        resourceName = undefined;
      },

      TSMethodSignature(node) {
        if (!resourceName) {
          return;
        }

        if (node.key.type !== "Identifier" || node.key.name !== "$select") {
          return;
        }

        if (
          node.returnType.type !== "TSTypeAnnotation" ||
          node.returnType.typeAnnotation.type !== "TSTypeReference" ||
          node.returnType.typeAnnotation.typeName.type !== "Identifier"
        ) {
          return;
        }

        const typeName = node.returnType.typeAnnotation.typeName.name;
        const expected = resourceName + "$SelectResource";

        if (typeName !== expected) {
          context.report({
            node,
            messageId: "selector",
            data: {
              resourceName,
              typeName,
              expected,
            },
          });
        }
      },

      TSPropertySignature(node) {
        if (!resourceName) {
          return;
        }

        if (node.key.type !== "Identifier") {
          return;
        }
        const keyName = node.key.name;

        if (
          node.typeAnnotation.type !== "TSTypeAnnotation" ||
          node.typeAnnotation.typeAnnotation.type !== "TSTypeReference" ||
          node.typeAnnotation.typeAnnotation.typeName.type !== "Identifier"
        ) {
          return;
        }

        const typeName = node.typeAnnotation.typeAnnotation.typeName.name;

        if (typeName === "Method") {
          return;
        }

        const expected = resourceName + pascalCase(keyName) + "Resource";

        if (typeName !== expected) {
          context.report({
            node,
            messageId: "property",
            data: {
              resourceName,
              keyName,
              typeName,
              expected,
            },
          });
        }
      },
    };
  },
};
