import { micromark } from 'micromark';

/**
 * Converts Markdown to safe HTML.
 *
 * @param {string} markdown - The Markdown string to be converted.
 * @returns {string} - Safe HTML string.
 */
export function renderMarkdown(markdown: string): string {
  let rawHtml = micromark(markdown);
  const mdHtml = rawHtml.replace(/<a\s([^>]*?)>/g, '<a target="_blank" $1>');

  return mdHtml;
}