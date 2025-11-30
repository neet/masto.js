export default {
  meta: {
    type: "problem",
    fixable: "code",
    schema: [],
    messages: {
      default: "Always use `T | null` for optional property",
    },
  },

  create(context) {
    return {
      TSPropertySignature(node) {
        if (!node.optional) {
          return;
        }

        if (node.typeAnnotation.type !== "TSTypeAnnotation") {
          return;
        }

        if (
          node.typeAnnotation.typeAnnotation.type !== "TSUnionType" ||
          node.typeAnnotation.typeAnnotation.types.every(
            (type) => type.type !== "TSNullKeyword",
          )
        ) {
          context.report({
            node,
            messageId: "default",
            fix: function* (fixer) {
              yield fixer.insertTextAfter(node.typeAnnotation, " | null");
            },
          });
        }
      },
    };
  },
};
