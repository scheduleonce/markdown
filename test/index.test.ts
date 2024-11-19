import { test } from "node:test";
import assert from "node:assert/strict";
import { renderMarkdown } from "../src/index.js";

test('renderMarkdown converts basic markdown to HTML', () => {
  const markdown = '# Hello World';
  const result = renderMarkdown(markdown);
  assert.equal(result, '<h1>Hello World</h1>');
});

test('renderMarkdown converts paragraph', () => {
  const markdown = 'This is a paragraph';
  const result = renderMarkdown(markdown);
  assert.equal(result, '<p>This is a paragraph</p>');
});

test('renderMarkdown converts bold text', () => {
  const markdown = '**Bold Text**';
  const result = renderMarkdown(markdown);
  assert.equal(result, '<p><strong>Bold Text</strong></p>');
});

test('renderMarkdown converts italic text', () => {
  const markdown = '*Italic Text*';
  const result = renderMarkdown(markdown);
  assert.equal(result, '<p><em>Italic Text</em></p>');
});

test('renderMarkdown converts link with target and class', () => {
  const markdown = '[Link](https://example.com)';
  const result = renderMarkdown(markdown);
  assert.equal(
    result, 
    '<p><a target="_blank" class="link-blue" href="https://example.com">Link</a></p>'
  );
});

test('renderMarkdown handles multiple links', () => {
  const markdown = 'Check [first link](https://first.com) and [second link](https://second.com)';
  const result = renderMarkdown(markdown);
  assert.ok(
    result.includes('<a target="_blank" class="link-blue" href="https://first.com">first link</a>') &&
    result.includes('<a target="_blank" class="link-blue" href="https://second.com">second link</a>')
  );
});

test('renderMarkdown handles empty input', () => {
  const markdown = '';
  const result = renderMarkdown(markdown);
  assert.equal(result, '');
});

test('renderMarkdown handles special characters', () => {
  const markdown = 'Text with <special> characters & symbols';
  const result = renderMarkdown(markdown);
  assert.equal(result, '<p>Text with &lt;special&gt; characters &amp; symbols</p>');
});

test('renderMarkdown preserves link title attribute', () => {
  const markdown = '[Link with title](https://example.com "Title")';
  const result = renderMarkdown(markdown);
  assert.equal(
    result, 
    '<p><a target="_blank" class="link-blue" href="https://example.com" title="Title">Link with title</a></p>'
  );
});