import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi BasketBall Lovers!!! </h1>
    <p>Welcome to my blog.</p>
      <h2>Index</h2>
      {data.allMarkdownRemark.edges.map(
          post =>(
              <a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a>
          )
      )}
  </div>


)

export const pageQuery = graphql `
    query IndexQuery {
        
      allMarkdownRemark(limit: 10) {
        edges {
          node {
            frontmatter {
              title
              path
              date
            }
          }
        }
      }

    }
    
`

export default IndexPage
