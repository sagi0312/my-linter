module.exports = function (node, report) {
  if (
    node.callee.object?.name === "console" &&
    node.callee.property?.name === "log"
  ) {
    report({
      message: "No console.log allowed",
      line: node.loc.start.line,
      column: node.loc.start.column,
    });
  }
};
