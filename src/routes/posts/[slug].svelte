<script context="module">
  export async function load({ fetch, page }) {
    const post = await fetch(`/posts/${page.params.slug}.json`).then((r) =>
      r.json()
    );

    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
</script>

<article>
  <h1 class="section-header">{post.attributes.title}</h1>
  {@html post.html}
</article>

<style>
  :global(arcticle) {
    padding: 4vw;
  }
</style>
