import React from "react"
import {graphql, useStaticQuery} from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
    {
    allSanityAuthor {
      edges {
        node {
          bio {
            style
            list
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

    const {name} = data.allSanityAuthor.edges[0].node
    const bio = data.allSanityAuthor.edges[0].node.bio[0].children[0].text

    return (
        <div>
          <div>{name}</div>
            <p>{bio}</p>
        </div>
    )
}