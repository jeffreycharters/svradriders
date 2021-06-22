import fs from 'fs';
import glob from 'glob';
import fm from 'front-matter';
import remark from 'remark';
import html from 'remark-html';
import rehypePrism from '@mapbox/rehype-prism';
import rehype from 'rehype';
import path from 'path';

/*  @param path path to markdown file
 *  @returns { path, attributes, body }
 */
export const convertMarkdown = (path) => {
  let file = fs.readFileSync(path, 'utf8');
  let { attributes, body } = fm(file);

  let result = remark()
    .use(html)
    .processSync(body).contents;
  result = rehype()
    .use(rehypePrism)
    .processSync(result).contents;

  return { path, attributes, html: result }
}

/* @param markdownPath path to folder with markdown files
 * @returns [...filenames]
 */
export const importMarkdowns = (markdownPath) => {
  let fileNames = glob.sync(`${markdownPath}*.md`);
  return fileNames.map(path => convertMarkdown(path))
}

export const convertToPostPreview = (object) => {
  const url = object.path.replace(".md", "").replace("src/", "");

  return { ...object.attributes, url };
}