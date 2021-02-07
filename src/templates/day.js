import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

export default function DayTemplate({ data, pageContext }) {
    const { frontmatter, body } = data.mdx;
    const { previous, next } = pageContext;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <main className={"day-template"}>
                <div className="day__header">
                    <h1>{frontmatter.day}, {frontmatter.title}</h1>
                    <Link to="..">Back to month</Link>
                </div>
                <div id="content" className="content">
                    {frontmatter.needed !== "none" ? <h2>Personas needed: {frontmatter.needed}</h2> : ''}
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <Pagination previous={previous} next={next} />
            </main>
        </Layout>
    );
}

export const query = graphql`
    query DaysBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                day
                needed
            }
        }
    }
`