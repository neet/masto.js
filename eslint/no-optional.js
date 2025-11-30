export default {
  meta: {
    type: "problem",
    fixable: "code",
    schema: [],
    messages: {
      default: "Do not use optional property. Use `T | null` instead.",
    },
  },

  create(context) {
    return {
      TSPropertySignature(node) {
        if (node.optional) {
          context.report({
            node,
            messageId: "default",
            fix: function* (fixer) {
              if (
                node.typeAnnotation.type !== "TSTypeAnnotation" ||
                node.typeAnnotation.typeAnnotation.type !== "TSUnionType" ||
                node.typeAnnotation.typeAnnotation.types.every(
                  (type) => type.type !== "TSNullKeyword",
                )
              ) {
                yield fixer.insertTextAfterRange(
                  node.typeAnnotation.typeAnnotation.range,
                  " | null",
                );
              }

              const keyEnd = node.key.range[1];
              const typeAnnotationStart = node.typeAnnotation.range[0];
              yield fixer.removeRange([keyEnd, typeAnnotationStart]);
            },
          });
        }
      },
    };
  },
};
