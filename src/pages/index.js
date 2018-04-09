import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
const { edges: posts } = data.allMarkdownRemark;
return (
    <div className="blog-posts">
        {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
                return (
                    <div className="preview" key={post.id}>
                        <h1><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h1>
                        <h2>{post.frontmatter.date}</h2>
                        <p>{post.excerpt}</p>
                    </div>
                );
            })}
    </div>
);


}

export const pageQuery = graphql `
    query IndexQuery {
        
      allMarkdownRemark(limit: 100, sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
        
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              path
              date (formatString: "MMMM DD, YYYY")
            }
          }
        }
      }

    }
    
`

export default IndexPage
