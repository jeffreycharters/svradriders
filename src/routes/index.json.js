import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';
import { dev } from '$app/env';

const markdownPath = dev ? 'static/' : '/';
let postFiles = importMarkdowns(markdownPath);
//let postFiles = importMarkdowns('static/entries/');

export const get = () => {
  let posts = postFiles.map(file => convertToPostPreview(file));
  let body = JSON.stringify(posts);

  return { body };
}