import { Link } from 'gatsby'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="grid gap-4 p-4">
      <div className="text-xl font-bold">Not found</div>

      <div>The page you requested couldn't be found. <Link to="/" className="underline text-blue-700 font-semibold">Home page</Link></div>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
