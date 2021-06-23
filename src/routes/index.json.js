import { importMarkdowns, convertToPostPreview } from '$lib/handle-markdown';
import { getMarkdownPath } from '$lib/get-md-path';
import { dev } from '$app/env'

const markdownPath = getMarkdownPath(dev);
let postFiles = importMarkdowns(markdownPath);

export const get = () => {
  let posts = postFiles.map(file => convertToPostPreview(file));
  let body = JSON.stringify(posts);

  return { body };
}