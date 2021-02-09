import React from "react"
import { graphql, Link } from "gatsby"
import MonthLayout from "../../../components/month"

export default function IndexPage({ data }) {
    const days = data.allMdx.nodes;
    const emptyDays = 8;

    return (
        <MonthLayout title="April">
            <ul className={"calendar calendar--30 calendar--friday"}>
                {[...Array(emptyDays)].map((e, i) => (
                    <li className="calendar__day disabled" key={i}>{i + 1}</li>
                ))}
                {days.map(({ frontmatter, slug }) => (
                    <li className={`calendar__day calendar__day--${slug.slice(-2)}`}><Link to={`/${slug}`} aria-label={frontmatter.title}>{+slug.slice(-2)}</Link></li>
                ))}
            </ul>
        </MonthLayout>
    );
}

export const query = graphql`
    query AprilQuery {
        allMdx(sort: {fields: slug, order: ASC}, filter: {slug: {regex: "/guide\/04\/"}}) {
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
