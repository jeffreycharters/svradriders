import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';
import { dev } from '$app/env';

let path = dev ? `static/posts/` : `posts/`;
let postFiles = importMarkdowns(path);

export const get = () => {
  let posts = postFiles.map(file => convertToPostPreview(file));
  let body = JSON.stringify(posts);

  return { body };
}