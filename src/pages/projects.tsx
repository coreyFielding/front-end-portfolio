import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import HeroBlock from '../blocks/hero-block'
import parseData from '../utils/parse-block'

// Template for all pages
// export default ({data}) => {
//     const hero = parseData(data.allSanityProject.edges[0].node.hero)
//     return (
//         <Layout>
//             <HeroBlock heroData={hero}/>
//         </Layout>
//     )
// }
