import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'

const RichText = ({ content }) => {
  const renderedContent = renderRichText(content)

  return (
    <div className="rich-text grid gap-4">{renderedContent}</div>
  )
}

export default RichText
