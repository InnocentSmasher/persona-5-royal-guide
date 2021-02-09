import React from "react"
import { graphql, Link } from "gatsby"
import MonthLayout from "../../../components/month"

export default function IndexPage({ data }) {
    const days = data.allMdx.nodes;

    return (
        <MonthLayout title="January">
            <ul className={"calendar calendar--31 calendar--sunday"}>
                {days.map(({ frontmatter, slug }) => (
                    <li className={`calendar__day calendar__day--${slug.slice(-2)}`}><Link to={`/${slug}`} aria-label={frontmatter.title}>{+slug.slice(-2)}</Link></li>
                ))}
            </ul>
        </MonthLayout>
    );
}

export const query = graphql`
    query JanuaryQuery {
        allMdx(sort: {fields: slug, order: ASC}, filter: {slug: {regex: "/guide\/01\/"}}) {
            nodes {
                frontmatter {
                    title
                    day
                    needed
                }
                slug
            }
        }
    }
`
