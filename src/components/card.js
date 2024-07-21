import React from 'react'
import ExternalLink from '@components/external-link'
import RichText from '@components/rich-text'

const Card = ({
  categories,
  headline,
  summary,
  details,
  explanation,
  source,
  sourceUrl,
}) => {
  return (
    <article className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="flex flex-col items-start md:col-span-3 justify-between">
        <div className="font-semibold order-first text-sm uppercase leading-7">{categories.join(' / ')}</div>
        <div>
          <p className="mt-8 text-xl lg:text-6xl leading-7 font-serif uppercase">{headline}</p>

          <h2 className="mt-2 text-lg font-light lg:text-2xl">{summary}</h2>

          <details className="w-full mt-12 group">
            <summary className="cursor-pointer list-none flex items-center gap-x-3 text-sm font-light leading-6">
              <span className="group-open:rotate-90"><svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 32 32"><path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28ZM8 6.69v18.62L24.925 16Z"/></svg></span>
              <span className="font-bold">More information</span>
            </summary>

            <div className="mt-4 grid lg:grid-cols-2 gap-8 items-start">
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
        </div>
      </div>
    </article>
  )
}

export default Card
