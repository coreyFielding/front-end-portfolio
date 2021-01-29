import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'

// Home page
export default ({ data }) => {
    const {allSitePage} = data
    const pageNodes = (data || {}) ? allSitePage.edges.map(edge => edge.node) : []

    return (
        <Layout>
            <SEO title="Home"/>
            home page
            <div>
                {
                    pageNodes && pageNodes.map((page) => {
                        return page.path !== '/' && (
                            <Link key={page.path} to={page.path}>
                                <p>{page.path}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query IndexPageQuery {
    allSitePage {
      edges {
        node {
            id
            path
        }
      }
    }
  }
`
