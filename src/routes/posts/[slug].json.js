import { convertMarkdown } from '$lib/handle-markdown';
//import { dev } from '$app/env'

export const get = ({ params }) => {
  const { slug } = params;
  //const markdownPath = dev ? 'static/' : ''
  //const post = convertMarkdown(`${markdownPath}${slug}.md`);
  const post = convertMarkdown(`static/entries/${slug}.md`);
  const body = JSON.stringify(post);

  return { body }
}