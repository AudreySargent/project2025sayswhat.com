import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/fraunces.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="frauncesFont"
    />,
    <link
      rel="preload"
      href="/fonts/nunito-sans.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="nunitoSansFont"
    />,
    <link
      rel="preload"
      href="/fonts/nunito-sans-italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="nunitoSansItalicFont"
    />,
  ])
}