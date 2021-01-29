import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

// Template for all pages
export default ({data}) => {
    const {id, component} = data
    return (
        <Layout>
            page
            <div>{component}</div>
        </Layout>
    )
}

export const query = graphql`
    query PageQuery($page_id: String) {
        sitePage(id: { eq: $page_id }) {
            id
            component
        }
    }
`