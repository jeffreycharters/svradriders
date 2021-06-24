import { importMarkdowns, convertToPost } from '$lib/handle-markdown';

export const get = ({ params }) => {
  const { slug } = params;

  const postFile = importMarkdowns('static/entries/', slug)[0];
  let body = JSON.stringify(postFile);

  return { body };
}