import React from 'react'
import PageBuilderContent from '../pageBuilderContent'
import {graphql} from "gatsby";

export default (props) => {
    const { type, pageBuilder, _rawPageBuilder } = props
    const Components = {
        pageBuilderContent: PageBuilderContent,
    }

    return pageBuilder.map((block, index) => {
        if (Components[block._type]) {
            return React.createElement(Components[block._type], {
                key: block._key,
                block,
                type,
                raw: _rawPageBuilder[index]
            })
        }
    })

    return (
        <section></section>
    )
}

export const query = graphql`
    fragment PageBuilder on SanityPage {
        _rawPageBuilder(resolveReferences: { maxDepth: 10 })
        pageBuilder {
            ... on SanityPageBuilderContent {
                _key
                _type
                Hero {
                    hero_title
                }
            }
        }
    }
`