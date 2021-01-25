const path = require(`path`)

exports.createPages = async ({ graphql, actions}) => {
    const { data } = await graphql(`
        query {
            allSitePage {
                nodes {
                    id
                    path
                }
            }
        }
    `)

    data.allSitePage.nodes.forEach(node => {
        const slug = node.path
        actions.createPage({
            path: slug,
            component: path.resolve(`src/pages/projects.tsx`),
            context: {
                page_id: node.id
            }
        })
    })
}
