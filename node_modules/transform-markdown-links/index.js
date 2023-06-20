'use strict';

// Thank you: http://stackoverflow.com/a/32382702 (with some modifications)
const linkRegExp = /\[([^\]]+)?\]\(([^)]+)\)/g;
const aliasLinkRegExp = /^\[(.*)\]:\s+(.*?)\s*(".*"|'.*'|\(.*\))?$/gm;

/**
 * Transform the links in a Markdown string using a transform function.
 * @param {String} input - Markdown input.
 * @param {TransformCallback} transform - Callback to transform each link.
 * @returns {String} Markdown with transformed links.
 *
 * @example
 * const input = 'This [link](page.md) will be transformed.';
 *
 * transformLinks(input, (link, text) => link + '?hooray');
 * // => 'This [link](page.md?hooray) will be transformed.'
 */
module.exports = (input, transform) => {
  let output = input;
  let match;

  // Transforming basic links
  while ((match = linkRegExp.exec(input)) !== null) {
    const string = match[0];
    const text = match[1] || '';
    const url = match[2];

    /**
     * Callback to transform a link within a Markdown string.
     * @callback TransformCallback
     * @param {String} link - URL of the link.
     * @param {String} text - Text of the link.
     * @returns {?String} Modified URL.
     */
    const replacement = transform(url, text);

    if (replacement) {
      output = output.replace(string, `[${text}](${replacement})`);
    }
  }

  // Transforming alias links
  while ((match = aliasLinkRegExp.exec(input)) !== null) {
    const string = match[0];
    const alias = match[1];
    const url = match[2];
    const title = match[3];
    const urlBrackets = /^<.*>$/.test(url);
    const innerUrl = urlBrackets ? url.replace(/^</, '').replace(/>$/, '') : url;

    let replacement = transform(innerUrl, alias);
    if (urlBrackets) {
      replacement = `<${replacement}>`;
    }

    if (replacement) {
      const titleText = title ? ' ' + title : '';
      output = output.replace(string, `[${alias}]: ${replacement + titleText}`);
    }
  }

  return output;
};
