# transform-markdown-links

[![Tests](https://github.com/gakimball/transform-markdown-links/actions/workflows/test.yml/badge.svg)](https://github.com/gakimball/transform-markdown-links/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/transform-markdown-links.svg?maxAge=2592000)](https://www.npmjs.com/package/transform-markdown-links)

> Transform the links in a Markdown file

Transforms the URLs of links in a Markdown file using a transform function.

## Installation

```bash
npm install transform-markdown-links
```

## Usage

```js
import transformLinks from 'transform-markdown-links';

const input = 'This [link](page.md) will be transformed.';

transformLinks(input, (link, text) => link + '?hooray');
// => 'This [link](page.md?hooray) will be transformed.'
```

## API

### transformLinks(input, transform)

Transform the links in a Markdown string using a transform function. Returns a String of Markdown with transformed links.

- **input** (String): Markdown input.
- **transform** (Function): Callback to transform each link. Should return a string to change the link's URL, or `undefined` to leave it as-is. Gets these parameters:
  - **link** (String): URL of the link.
  - **text** (String): text of the link.

## Local Development

```bash
git clone https://github.com/gakimball/transform-markdown-links
cd transform-markdown-links
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
