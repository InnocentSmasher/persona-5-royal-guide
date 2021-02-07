const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;
    const dayTemplate = path.resolve(
        'src/templates/day.js'
    );

    return graphql(`
        {
            allMdx(
                sort: { fields: slug, order: ASC }
            ) {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        const days = result.data.allMdx.nodes;

        // create page for each mdx file
        days.forEach((day, index) => {
            const previous = index === 0 ? null : days[index - 1];
            const next = index === days.length - 1 ? null : days[index + 1];

            createPage({
                path: day.fields.slug,
                component: dayTemplate,
                context: {
                    slug: day.fields.slug,
                    previous,
                    next,
                },
            });
        });
    });
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};