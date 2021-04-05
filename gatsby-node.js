const path = require('path')

exports.createPages = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions
  // const PageTemplate = path.resolve('./src/templates/page.js')
  let pageTemplate

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
    const slug = page.node.slug === 'home' ? '/' : `/${page.node.slug}`

    switch (slug) {
      case '/':
        pageTemplate = path.resolve('./src/templates/Home.js')
        break
      case '/about':
        pageTemplate = path.resolve('./src/templates/About.js')
        break
      case '/repertoire':
        pageTemplate = path.resolve('./src/templates/Repertoire.js')
        break
      case '/gallery':
        pageTemplate = path.resolve('./src/templates/Gallery.js')
        break
      case '/contact':
        pageTemplate = path.resolve('./src/templates/Contact.js')
        break
    }

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        id: page.node.id
      }
    })
  })
}