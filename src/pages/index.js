import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>I'm Phil, and I like building user interfaces with React.</p>
    <p>Welcome to my site!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
