# my-linter

A minimal JavaScript linter built from scratch using Acorn. Just a parser, and a walker.

## How it works

1. Reads a `.js` file from the CLI
2. Parses it into an AST using [Acorn](https://github.com/acornjs/acorn)
3. Walks every node in the tree
4. Fires rules against matching nodes
5. Reports violations with line and column numbers

## Project structure

```
my-linter/
├── index.js                  ← entry point, parser, walker
└── rules/
    └── no-console-log.js     ← rule: no console.log allowed
```

## Installation

Clone the repo and link it globally:

```bash
git clone https://github.com/sagi0312/my-linter.git
cd my-linter
npm install
npm link
```

## Usage

Run against any `.js` file:

```bash
my-linter path/to/file.js
```

Or from inside the consuming repo:

```bash
cd your-project/src
my-linter test.js
```

## Output

```bash
[ { message: 'No console.log allowed', line: 1, column: 0 } ]
```

## Rules

| Rule | Description |
|------|-------------|
| `no-console-log` | Disallows `console.log` calls |

## Why

Built to understand how ESLint works under the hood — parsing, AST traversal, rule engines, and CLI tooling.
