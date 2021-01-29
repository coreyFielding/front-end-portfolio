const path = require(`path`)

const createPages = ({data} = [], template, actions) => {
    const {createPage} = actions
    const pageEdges = (data.allSitePage || {}).edges
    const pageTemplate = path.resolve(`./src/templates/${template}`)

    if (data.errors) throw data.errors

    pageEdges.map((node) => {
        console.log(node.id)
        createPage({
            path: `${node.path}`,
            component: pageTemplate,
            context: {
                page_id: node.id
            }
        })
    })
}

// Create general page template
const createAllPages = async (graphql, actions) => {
    const data = await graphql(`
        {
          allSitePage {
            edges {
              node {
                id
                path
              }
            }
          }
        }
  `)

    createPages(data, 'page.tsx', actions)
}

exports.createPages = async ({graphql, actions}) => {
    await createAllPages(graphql, actions)
}
