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
              let text = context.sourceCode.getText(node);
              text = text.replace(/\?\s*:/, ":");
              yield fixer.replaceText(node, text);
            },
          });
        }
      },
    };
  },
};
