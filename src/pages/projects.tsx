import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {
    useEffect(() => {console.log('test')
    }, [])
    return (
        <Layout>
            <div>
                test
            </div>
        </Layout>
    )
}