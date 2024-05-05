import { remark } from 'remark';
import remarkHtml from 'remark-html';

export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export async function parseMarkdown(content) {
  const result = await remark().use(remarkHtml).process(content);
  return result.toString();
}
