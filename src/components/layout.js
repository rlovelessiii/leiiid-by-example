import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function Layout({ children, home }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const title = data['site'].siteMetadata.title
  const author = data['site'].siteMetadata.author

  return (
    <div className={styles.container}>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The Official Web-app for the blog - Leiiid by Example"
        />
        <meta name="og:title" content={title} />
      </Helmet>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={author}
            />
            <h1 className={utilStyles.heading2Xl}>{author}</h1>
          </>
        ) : (
          <>
            <Link to="/">
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={author}
              />
            </Link>
            <Link to="/">
              <h2 className={`${utilStyles.headingLg} ${utilStyles.colorInherit}`}>
                {author}
              </h2>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link to="/">
            &larr; Back to home
          </Link>
        </div>
      )}
      <footer>
        <p>&#169; {author}</p>
      </footer>
    </div>
  )
}
