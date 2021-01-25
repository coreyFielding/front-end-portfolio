import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'

export const query = graphql`
  {
    allSitePage {
      nodes {
        path
        isCreatedByStatefulCreatePages
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({data}) => {
    console.log(data)
    const pages = data.allSitePage.nodes
    return (
        <Layout>
            <SEO title="Home"/>
            <div>
                {
                    pages.map((page) => (
                        <Link key={page.path} to={page.path}>
                            <p>{page.path}</p>
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}

export default IndexPage
