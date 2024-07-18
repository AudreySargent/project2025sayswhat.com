<script>
  import Markdown from '$lib/components/Markdown.svelte'

  export let data

  const entries = data.entries
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
</script>

<div>
  {#each entries as entry}
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
