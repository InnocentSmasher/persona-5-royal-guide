import React from "react"
import { graphql, Link } from "gatsby"
import MonthLayout from "../../../components/month"

export default function IndexPage({ data }) {
    const days = data.allMdx.nodes;

    return (
        <MonthLayout title="August" previous="July" next="September">
            <ul className={"calendar calendar--31 calendar--monday"}>
                {days.map(({ frontmatter, slug }) => (
                    <li className={`calendar__day calendar__day--${slug.slice(-2)}`}><Link to={`/${slug}`} aria-label={frontmatter.title}>{+slug.slice(-2)}</Link></li>
                ))}
            </ul>
        </MonthLayout>
    );
}

export const query = graphql`
    query AugustQuery {
        allMdx(sort: {fields: slug, order: ASC}, filter: {slug: {regex: "/august/"}}) {
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
