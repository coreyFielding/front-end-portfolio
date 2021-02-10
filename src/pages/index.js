import React, {createRef} from "react"
import Layout from "../components/layout/layout"
import HeroBlock from "../blocks/hero-block"
import AboutBlock from '../blocks/about-block'
import ContactBlock from '../blocks/contact-block'
import SkillsBlock from "../blocks/skills-block"
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import parseData from '../utils/parse-block'
import styled from "styled-components";

// Landing page
export default ({ data }) => {
    const {allSitePage} = data
    const pageNodes = (data || {}) ? allSitePage.edges.map(edge => edge.node) : []
    const heroBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node._rawBlocks[0]) : []
    const aboutBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node._rawBlocks[1]) : []
    const skillsBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node._rawBlocks[2]) : []
    const projectBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node._rawBlocks[3]) : []
    const contactBlock = (data || {}) ? parseData(data.allSanityLanding.edges[0].node._rawBlocks[5]) : []
    const pageLinks = pageNodes ? pageNodes.map((page) => ({path: page.path})) : []
    const skillsRef = createRef();

    return (
        <Layout pageLinks={pageLinks}>
            <SEO title="Corey Fielding"/>
            <div>
                <HeroBlock {...heroBlock} skillsRef={skillsRef} />
                <AboutBlock {...aboutBlock}/>
                <ContactBlock {...contactBlock}/>
                {/*<ProjectBlock {...projectBlock} />*/}
                <SkillsBlock {...skillsBlock} ref={skillsRef}/>
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
          _rawBlocks
        }
      }
    }
  }
`
