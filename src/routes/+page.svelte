<script>
  import { marked } from 'marked'

  export let data

  const renderer = new marked.Renderer()
</script>

<div class="grid gap-4">
  <div class="italic text-lg">This is a huge work in progress. Appearance and content may change frequently.</div>

  <div class="text-4xl font-bold">Project 2025 Says What?</div>

  <div>Project 2025 rushed into the news recently, and a lot of people have been talking about it - but what does it actually say? Below is a list of summaries about divisive topics, and what Project 2025 has to say about each one. <span class="italic">(Note: Links do not open in new windows/tabs.)</span></div>

  <div class="grid divide-y">
    {#each data.entries as entry}
      {#key entry.sys.id}
        <details class="group p-4">
          <summary class="flex gap-4 justify-between items-center font-medium cursor-pointer list-none">
            <strong class="text-xl">{entry.fields.headline}</strong>
            <span class="group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>

          <div class="mt-3 grid gap-4">
            <div class="markdown grid gap-4">{@html marked(entry.fields.details, { renderer })}</div>

            <div class="grid gap-4">
              <div class="font-bold text-lg">Further Explanation</div>

              <div class="markdown grid gap-4">{@html marked(entry.fields.explanation, { renderer })}</div>
            </div>

            <div class="flex gap-2 items-center">
              <a href={entry.fields.sourceUrl} rel="noopener noreferrer" class="text-blue-600 underline">Source: {entry.fields.source}</a>
            </div>
          </div>
        </details>
      {/key}
    {/each}
  </div>

  <div class="flex gap-2 items-center">
    <span>Based on an idea by <a href="https://bsky.app/profile/clpolk.com" rel="noopener noreferrer" class="text-blue-600 underline">C.L. Polk</a></span>
    <span class="font-bold">|</span>
    <span><a href="https://github.com/michaelvcolianna/project2025sayswhat.com" rel="noopner noreferrer" class="text-blue-600 underline">Source Code</a></span>
  </div>
</div>

<style>
  /* nothing */
</style>
