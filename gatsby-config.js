const adapter = require('gatsby-adapter-netlify')

// Add variables from the .env file to process
require('dotenv').config({
  path: `.env`,
})

// Determine build style & environment
const isDev = process.env.gatsby_executing_command === 'develop'
const isBuild = process.env.gatsby_executing_command === 'build'
const isNetlify = process.env.NETLIFY === 'true'

console.log(`\x1b[2m✲ Running ${isNetlify ? 'on Netlify' : 'locally'} in ${isDev || !isBuild ? 'develop' : 'build'} mode\x1b[0m`)

// Set site URL based on build situation
const siteUrl = isNetlify
  ? 'https://project2025sayswhat.com'
  : (isBuild
    ? process.env.LOCAL_URL
    : 'http://localhost:8000'
  )

// Get the information for Contentful
const ctfSpaceId = process.env.CONTENTFUL_SPACE_ID
const ctfAccessToken = isDev
  ? process.env.CONTENTFUL_PREVIEW_TOKEN
  : process.env.CONTENTFUL_DELIVERY_TOKEN
const ctfHost = isDev
  ? 'preview.contentful.com'
  : 'cdn.contentful.com'
if (!ctfSpaceId || !ctfAccessToken) {
  throw new Error(`Missing environment variables needed for Contentful (CONTENTFUL_SPACE_ID and/or CONTENTFUL_${isDev ? 'PREVIEW' : 'DELIVERY'}_TOKEN`)
}

const baseConfig = {
  siteMetadata: {
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: ctfAccessToken,
        spaceId: ctfSpaceId,
        host: ctfHost,
      }
    },
  ],
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = isNetlify
  ? {
    adapter: adapter({
      excludeDatastoreFromEngineFunction: false,
      imageCDN: false,
    }),
    ...baseConfig,
  }
  : baseConfig
