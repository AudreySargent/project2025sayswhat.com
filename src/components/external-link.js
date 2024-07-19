import React from 'react'

const ExternalLink = ({ href, label, children }) => {
  return (
    <a href={href} rel="noopener noreferrer" className="font-semibold text-blue-700 underline">{label || children }</a>
  )
}

export default ExternalLink
