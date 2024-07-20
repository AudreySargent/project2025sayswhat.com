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
      <summary className="font-medium cursor-pointer list-none">
        <div className="mx-auto max-w-screen-xl w-full flex gap-4 justify-between items-center">
          <span className="font-serif font-bold text-xl">{headline}</span>
          <span className="group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
          </span>
        </div>
      </summary>

      <div className="mx-auto max-w-screen-xl w-full">
        <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:items-start">
          <RichText content={details} />

          <div className="grid gap-4">
            <div className="font-bold">Further Explanation</div>

            <RichText content={explanation} />
          </div>
        </div>

        <div className="flex gap-2 items-center mt-4 text-sm">
          <ExternalLink href={sourceUrl}>Source: {source}</ExternalLink>
        </div>
      </div>
    </details>
  )
}

export default Card
