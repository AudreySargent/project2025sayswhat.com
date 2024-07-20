import { graphql } from 'gatsby'
import React from 'react'
import Card from '@components/card'
import ExternalLink from '@components/external-link'

const IndexPage = ({
  data: {
    allContentfulSection: {
      nodes
    },
  },
}) => {
  // Purely aesthetic mapping of entries
  const entries = nodes
    .map((node) => ({
      id: node.id,
      headline: node.headline.headline,
      details: node.details,
      explanation: node.explanation,
      source: node.source,
      sourceUrl: node.sourceUrl,
    }))

  // Shuffle the entries
  let i = entries.length
  while (i !== 0) {
    let j = Math.floor(Math.random() * i)
    i--
    [entries[i], entries[j]] = [entries[j], entries[i]]
  }

  return (
    <div data-element="body">
      <div className="relative border-b">
        <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-8 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <p className="mt-8 text-4xl font-light lg:text-6xl text-balance tracking-tight uppercase font-serif">Project 2025 Says What?</p>
              <p className="mt-6 text-lg leading-8 font-light lg:text-xl">Project 2025 rushed into the news recently, and a lot of people have been talking about it. But what does it actually say? Below is a list of summaries about divisive topics, and what Project 2025 has to say about each one. <span className="italic">(Note: Links do not open in new windows/tabs.)</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid divide-y">
        {entries.map((entry) => <Card key={entry.id} {...entry} />)}
      </div>

      <footer className="border-t">
        <div className="px-8 py-12 mx-auto md:px-12 max-w-screen-xl lg:py-12">
          <div className="grid gap-6">
            <div className="gap-x-8 gap-y-6 text-zinc-500 font-light uppercase">
              <p className="md:text-base xl:text-2xl">
                In recent weeks, more awareness is being brought to <ExternalLink href="https://en.wikipedia.org/wiki/Agenda_47" label="Agenda 47" />. Make sure to check that out, as well!
                <br />
                <br />
                © 2024 by <ExternalLink href="https://bsky.app/profile/mvc.ink" label="MVC" /> | <ExternalLink href="https://github.com/michaelvcolianna/project2025sayswhat.com" label="Source Code" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

// @note Sorting must be in place for random order purposes
// @question Is 'limit' needed
export const query = graphql`{
  site {
    siteMetadata {
      siteUrl
    }
  }
  allContentfulSection(
    sort: {
      createdAt: ASC
    }
    limit: 1000
  ) {
    nodes {
      id
      headline {
        headline
      }
      details {
        raw
      }
      explanation {
        raw
      }
      source
      sourceUrl
    }
  }
}`

// SEO stuff
export const Head = ({
  data: {
    site: {
      siteMetadata: {
        siteUrl,
      },
    },
  },
}) => {
  const cardSrc = `${siteUrl}/p2025-card.jpg`

  return (
    <>
      <title>Project 2025 Says What?</title>
      <link rel="icon" type="image/png" href={`${siteUrl}/favicon.png`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="title" content="Project 2025 Says What?" />
      <meta property="og:title" content="Project 2025 Says What?" />
      <meta name="twitter:title" content="Project 2025 Says What?" />
      <meta name="description" content="Project 2025 rushed into the news recently, and a lot of people have been talking about it - but what does it actually say?" />
      <meta property="og:description" content="Project 2025 rushed into the news recently, and a lot of people have been talking about it - but what does it actually say?" />
      <meta name="twitter:description" content="Project 2025 rushed into the news recently, and a lot of people have been talking about it - but what does it actually say?" />
      <meta name="image" content={cardSrc} />
      <meta property="og:image" content={cardSrc} />
      <meta name="twitter:image" content={cardSrc} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
