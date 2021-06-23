import { convertMarkdown } from '$lib/handle-markdown';

export const get = ({ params }) => {
  const { slug } = params;
  const post = convertMarkdown(`static/posts/${slug}.md`);
  const body = JSON.stringify(post);

  return { body }
}