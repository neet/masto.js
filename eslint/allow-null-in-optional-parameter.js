export default {
  meta: {
    type: "problem",
    fixable: "code",
    schema: [],
    messages: {
      optionalWithoutNull: "Always use `T | null` for optional property",
      nullWithoutOptional: "Mark nullable parameter as optional",
    },
  },

  create(context) {
    return {
      TSPropertySignature(node) {
        if (node.optional) {
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
              messageId: "optionalWithoutNull",
              fix: function* (fixer) {
                yield fixer.insertTextAfter(node.typeAnnotation, " | null");
              },
            });
          }
        } else {
          if (
            node.typeAnnotation.typeAnnotation.type === "TSUnionType" &&
            node.typeAnnotation.typeAnnotation.types.some(
              (type) => type.type === "TSNullKeyword",
            )
          ) {
            context.report({
              node,
              messageId: "nullWithoutOptional",
              fix: function* (fixer) {
                yield fixer.insertTextAfter(node.key, "?");
              },
            });
          }
        }
      },
    };
  },
};
