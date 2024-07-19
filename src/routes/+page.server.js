import { error } from '@sveltejs/kit'
import contentful from 'contentful'

export async function load() {
  const config = {
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  }

  const client = contentful.createClient(config)

  const response = await client.getEntries({
    content_type: 'section',
    order: '-sys.createdAt',
  })

  if (response) {
    return { entries: response.items }
  }

  error(404, 'Not found')
}
