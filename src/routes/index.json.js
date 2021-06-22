import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';
import { dev } from '$app/env';

let postFiles = importMarkdowns(`src/posts/`);

export const get = () => {
  let posts = postFiles.map(file => convertToPostPreview(file));
  let body = JSON.stringify(posts);

  return { body };
}