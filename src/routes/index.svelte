<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch("index.json").then((r) => r.json());

    return {
      props: { posts },
    };
  }
</script>

<script>
  import PostCard from "../components/PostCard.svelte";
  export let posts;
</script>

<main>
  <h1>Posts</h1>
  {#each posts as post}
    <PostCard {...post} />
  {/each}
</main>

<style>
  main {
    padding: 4vw;
  }
</style>
