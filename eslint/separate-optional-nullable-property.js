export default {
  meta: {
    type: "problem",
    schema: [],
    messages: {
      default: "Annotate optional and nullable entity properties separately",
    },
  },

  create(context) {
    return {
      TSPropertySignature(node) {
        if (
          node.optional &&
          node.typeAnnotation.type === "TSTypeAnnotation" &&
          node.typeAnnotation.typeAnnotation.type === "TSUnionType" &&
          node.typeAnnotation.typeAnnotation.types.some(
            (type) => type.type === "TSNullKeyword",
          )
        ) {
          context.report({
            node,
            messageId: "default",
          });
        }
      },
    };
  },
};
