import React from "react"
import { graphql, Link } from "gatsby"
import MonthLayout from "../../../components/month"

export default function IndexPage({ data }) {
    const days = data.allMdx.nodes;

    return (
        <MonthLayout title="September" previous="August" next="October">
            <ul className={"calendar calendar--30 calendar--thursday"}>
                {days.map(({ frontmatter, slug }) => (
                    <li className={`calendar__day calendar__day--${slug.slice(-2)}`}><Link to={`/${slug}`} aria-label={frontmatter.title}>{+slug.slice(-2)}</Link></li>
                ))}
            </ul>
        </MonthLayout>
    );
}

export const query = graphql`
    query SeptemberQuery {
        allMdx(sort: {fields: slug, order: ASC}, filter: {slug: {regex: "/september/"}}) {
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
