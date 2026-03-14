#!/usr/bin/env node
const acorn = require("acorn");
const fs = require("fs");
const noConsoleLog = require("./rules/no-console-log");

const filePath = process.argv[2];
const code = fs.readFileSync(filePath, "utf8");

const ast = acorn.parse(code, {
  ecmaVersion: "latest",
  sourceType: "module",
  locations: true,
});

const problems = [];

function report(problem) {
  problems.push(problem);
}

function walk(node, visitor) {
  if (!node || typeof node !== "object") return;

  if (visitor[node.type]) {
    visitor[node.type](node);
  }

  for (const key of Object.keys(node)) {
    walk(node[key], visitor);
  }
}

walk(ast, {
  CallExpression(node) {
    noConsoleLog(node, report);
  },
});

console.log(problems);
