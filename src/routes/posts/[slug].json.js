import { convertMarkdown } from '$lib/handle-markdown';
import { getMarkdownPath } from '$lib/get-md-path';
import { dev } from '$app/env'

export const get = ({ params }) => {
  const { slug } = params;
  const path = getMarkdownPath(dev);
  const post = convertMarkdown(`${path}${slug}.md`);
  const body = JSON.stringify(post);

  return { body }
}