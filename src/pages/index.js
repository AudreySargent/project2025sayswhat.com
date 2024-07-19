import { graphql } from 'gatsby'
import React from 'react'
import Card from '@components/card'

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
    <div className="grid gap-4 p-4">
      <div className="italic text-lg">This is a huge work in progress. Appearance and content may change frequently.</div>

      <div className="text-4xl font-bold">Project 2025 Says What?</div>

      <div>Project 2025 rushed into the news recently, and a lot of people have been talking about it - but what does it actually say? Below is a list of summaries about divisive topics, and what Project 2025 has to say about each one. <span className="italic">(Note: Links do not open in new windows/tabs.)</span></div>

      <div className="grid divide-y">
        {entries.map((entry) => <Card key={entry.id} {...entry} />)}
      </div>

      <div className="flex gap-2 items-center">
        {/* <span>Based on an idea by <a href="https://bsky.app/profile/clpolk.com" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">C.L. Polk</a></span>
        <span className="font-bold">|</span> */}
        <span><a href="https://github.com/michaelvcolianna/project2025sayswhat.com" rel="noopner noreferrer" className="text-blue-700 underline font-semibold">Source Code</a></span>
      </div>
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
