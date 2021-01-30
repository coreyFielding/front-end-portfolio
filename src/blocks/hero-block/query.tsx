import {graphql, useStaticQuery} from "gatsby";
import parseBlockData from '../../utils/parse-block'

export default () => {
    const query = useStaticQuery(graphql`
        query {
            allSanityAuthor {
              edges {
                node {
                  bio {
                    children {
                      text
                    }
                  }
                  name
                }
              }
            }
        }
    `)
    return parseBlockData(query)
}
