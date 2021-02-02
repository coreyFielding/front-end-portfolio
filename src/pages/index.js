import React from "react"
import Layout from "../components/layout/layout"
import HeroBlock from "../blocks/hero-block"
import AboutBlock from "../blocks/about-block"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import parseData from '../utils/parse-block'

// Landing page
export default ({ data }) => {
    const {allSitePage} = data
    const pageNodes = (data || {}) ? allSitePage.edges.map(edge => edge.node) : []
    const heroBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node.blocks[0]) : []
    // const aboutBlock = (data || {}) ? parseData(data.allSanityAbout.edges[0].node) : []
    const pageLinks = pageNodes ? pageNodes.map((page) => ({path: page.path})) : []

    return (
        <Layout pageLinks={pageLinks}>
            <SEO title="Corey Fielding"/>
            <div className="mt-0 w-full h-full">
                <HeroBlock {...heroBlock} />
                {/*<AboutBlock aboutData={aboutBlock}/>*/}

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
    allSanityLanding {
      edges {
        node {
          blocks {
            ... on SanityHero {
              _key
              _type
              hero_body
              hero_scrollBtnIcon
              hero_scrollBtnText
              hero_scrollBtnUrl
              hero_contactBtn
              hero_contactBtnColour
              hero_contactBtnShape
              hero_contactBtnText
              hero_contactBtnUrl
              hero_subtitle
              hero_title
              hero_textColour
              hero_textPositionX
              hero_textPositionY
              background_colour
              background_gradient
              columns {
                _key
                _type
                _rawColumns
              }
              workStatus
            }
          }
        }
      }
    }
  }
`
