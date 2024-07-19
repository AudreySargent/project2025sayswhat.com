import React from 'react'
import ExternalLink from '@components/external-link'
import RichText from '@components/rich-text'

const Card = ({
  headline,
  details,
  explanation,
  source,
  sourceUrl,
}) => {
  return (
    <details className="group p-4">
      <summary className="flex gap-4 justify-between items-center font-medium cursor-pointer list-none">
        <strong className="text-xl">{headline}</strong>
        <span className="group-open:rotate-180">
          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
        </span>
      </summary>

      <div className="mt-3 grid gap-8 lg:grid-cols-2 lg:items-start">
        <RichText content={details} />

        <div className="grid gap-4">
          <div className="font-bold">Further Explanation</div>

          <RichText content={explanation} />
        </div>
      </div>

      <div className="flex gap-2 items-center mt-4 text-sm">
        <ExternalLink href={sourceUrl}>Source: {source}</ExternalLink>
      </div>
    </details>
  )
}

export default Card
