# markdown-safe

[![Build status](https://github.com/scheduleonce/markdown-safe/actions/workflows/node.js.yml/badge.svg)](https://github.com/scheduleonce/markdown-safe/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Thin wrapper for markdown parsing and output sanitization

## Installation

To install this module, run the following command:

```sh
$ npm install --save @oncehub/markdown-safe
```

## Usage

```ts
import { renderMarkdown } from "@oncehub/markdown-safe";

const markdown = `

# This is a heading

This is some **bold** text, and here's a [link](https://example.com).
`;

const safeHtml = renderMarkdown(markdown);

// Now you can use 'safeHtml' (e.g., set it as the innerHTML of an element)
console.log(safeHtml);
```

## Development

### Tests

Run tests via `npm test`.

### Deployment

Package is automatically published to npm when [creating a new release](.github/workflows/npm-publish.yml) on Github. Check out the release section in the repo. Read more about releases [here](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).

## License

This module is licensed under the MIT License. See the LICENSE file for details.
