<script>
  import Markdown from '$lib/components/Markdown.svelte'

  export let data
</script>

<div>
  {#each data.entries as entry}
    <details>
      <summary>
        <strong>{entry.fields.headline}</strong>
      </summary>

      <Markdown content={entry.fields.details} />
    </details>
  {/each}
</div>

<style>
  /* nothing */
</style>
