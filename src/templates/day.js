import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import ArcanaNeeded from "../components/arcana-needed";

export default function DayTemplate({ data, pageContext }) {
    const { frontmatter, body } = data.mdx;
    let { previous, next } = pageContext;

    // set up edge cases since the year is split
    if (pageContext.slug === "/guide/04/09/") {
        previous = null;
    } else if (pageContext.slug === "/guide/12/31/") {
        next = {
            "fields": {
                "slug": "/guide/01/01/"
            },
            "frontmatter": {
                "title": "January 1st"
            }
        };
    } else if (pageContext.slug === "/guide/01/01/") {
        previous = {
            "fields": {
                "slug": "/guide/12/31/"
            },
            "frontmatter": {
                "title": "December 31st"
            }
        };
    }  else if (pageContext.slug === "/guide/02/02/") {
        next = null;
    }

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <main className={"day"}>
                <div className="day__header">
                    <h1>{frontmatter.day}, {frontmatter.title}</h1>
                    <Link to="..">Back to month</Link>
                </div>
                <div id="content" className="content">
                    <ArcanaNeeded arcana={frontmatter.arcana} />
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
                arcana
            }
        }
    }
`