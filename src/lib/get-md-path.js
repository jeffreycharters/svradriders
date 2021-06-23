export const getMarkdownPath = (inDev) => {
  return inDev ? 'static/posts/' : 'build/posts/';
}