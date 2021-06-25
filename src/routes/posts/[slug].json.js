import { convertMarkdownLink } from '$lib/handle-markdown';

export const get = async ({ params }) => {
  const { slug } = params;

  const postFile = await convertMarkdownLink(`https://raw.githubusercontent.com/jeffreycharters/svradriders/main/static/entries/${slug}.md`);
  console.log(postFile)
  let body = JSON.stringify(postFile);

  return { body };
}