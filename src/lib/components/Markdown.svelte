<script>
  import { marked } from 'marked'

  export let content = ''

  const renderer = new marked.Renderer()

  $: pageContent = marked(content, { renderer })
</script>

<div>{@html pageContent}</div>
