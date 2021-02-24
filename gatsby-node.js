const path = require('path')

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions
  const PageTemplate = path.resolve('./src/templates/page.js')

  const result =
    await graphql(`
      {
        allWpPage {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `)

  if (result.errors) reporter.panicOnBuild('Error while running graphQL query - gatsby-node')

  const Pages = result.data.allWpPage.edges
  Pages.forEach(page => {
    const slugPage = page.node.slug === 'home' ? '/' : `/${page.node.slug}`
    createPage({
      path: slugPage,
      component: PageTemplate,
      context: {
        id: page.node.id
      }
    })
  })
}