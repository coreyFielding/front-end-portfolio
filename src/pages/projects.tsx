import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

// Template for all pages
export default ({data}) => {
    const {hero} = data.allSanityProject.edges[0].node
    return (
        <Layout>
            <div>{hero.hero_title}</div>
        </Layout>
    )
}

export const query = graphql`
{
    allSanityProject {
        edges {
          node {
            hero {
              _key
              _type
              hero_title
              hero_subtitle
              _rawImage
              _rawColumns
            }
          }
        }
      }
    }
`
