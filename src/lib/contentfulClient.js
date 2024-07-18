import contentful from 'contentful'

const config = {
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
}

export const client = contentful.createClient(config)
