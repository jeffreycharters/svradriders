import { convertMarkdown } from '$lib/handle-markdown';

export const get = ({ params }) => {
  const { slug } = params;
  const post = convertMarkdown(`${slug}.md`);
  const body = JSON.stringify(post);

  return { body }
}