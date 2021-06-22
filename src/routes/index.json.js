import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';

let postFiles = importMarkdowns('static/posts/');

export const get = () => {
  let posts = postFiles.map(file => convertToPostPreview(file));
  let body = JSON.stringify(posts);

  return { body };
}