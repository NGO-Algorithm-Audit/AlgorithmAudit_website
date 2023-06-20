/* eslint import/no-unresolved:0 */
/* eslint-env mocha */

'use strict';

const expect = require('chai').expect;
const transform = require('.');

describe('transform()', () => {
  it('transforms Markdown links', () => {
    const input = 'There\'s a [link](page.md) or [two](page2.md) in this sentence.';
    const output = transform(input, link => {
      return link.replace('md', 'html');
    });
    expect(output).to.equal('There\'s a [link](page.html) or [two](page2.html) in this sentence.');
  });

  it('calls the transform function with the URL and text of the link', () => {
    transform('[text](url)', (link, text) => {
      expect(link).to.equal('url');
      expect(text).to.equal('text');
    });
  });

  it('detects empty text links', () => {
    const input = '![](/resources/picture.JPG) Here is a link with no text.';
    const output = transform(input, () => {
      return 'http://url.to/picture';
    });
    expect(output).to.equal('![](http://url.to/picture) Here is a link with no text.');
  });

  it('matches link aliases', () => {
    const input = '[This link][alias] is an alias.\n\n[alias]: http://example.com';
    const output = transform(input, () => {
      return 'http://example.org';
    });
    expect(output).to.equal('[This link][alias] is an alias.\n\n[alias]: http://example.org');
  });

  it('matches link aliases with a link enclosed in angle brackets', () => {
    const input = '[This link][alias] is an alias.\n\n[alias]: <http://example.com>';
    const output = transform(input, () => {
      return 'http://example.org';
    });
    expect(output).to.equal('[This link][alias] is an alias.\n\n[alias]: <http://example.org>');
  });

  it('matches link aliases with a title', () => {
    const input = '[This link][alias] is an alias.\n\n[alias]: http://example.com (title)';
    const output = transform(input, () => {
      return 'http://example.org';
    });
    expect(output).to.equal('[This link][alias] is an alias.\n\n[alias]: http://example.org (title)');
  });
});
