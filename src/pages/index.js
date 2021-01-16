import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home({ data }) {
  const title = data['site'].siteMetadata.title

  return (
    <Layout home>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li className={utilStyles.listItem} key={node.id}>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {node.frontmatter.date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
