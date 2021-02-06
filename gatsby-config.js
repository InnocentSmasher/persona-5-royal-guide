module.exports = {
    siteMetadata: {
        title: `Persona 5 Royal Guide`,
        description: `A set of guides and resources for the video game Persona 5 Royal.`,
        author: `Chuck Hutchins`,
        siteUrl: `https://persona5royal.netlify.app`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `guide`,
                path: `${__dirname}/src/pages/guide/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
    ]
}