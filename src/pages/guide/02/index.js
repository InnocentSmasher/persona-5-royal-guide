import React from "react"
import { graphql, Link } from "gatsby"
import MonthLayout from "../../../components/month"

export default function IndexPage({ data }) {
    const days = data.allMdx.nodes;
    const emptyDays = 26;

    return (
        <MonthLayout title="February">
            <ul className={"calendar calendar--28 calendar--wednesday"}>
                {days.map(({ frontmatter, slug }) => (
                    <li className={`calendar__day calendar__day--${slug.slice(-2)}`} key={slug}><Link to={`/${slug}`} aria-label={frontmatter.title}>{+slug.slice(-2)}</Link></li>
                ))}
                {[...Array(emptyDays)].map((e, i) => (
                    <li className="calendar__day disabled" key={i}>{i + 3}</li>
                ))}
            </ul>
        </MonthLayout>
    );
}

export const query = graphql`
    query FebruaryQuery {
        allMdx(sort: {fields: slug, order: ASC}, filter: {slug: {regex: "/guide\/02\/"}}) {
            nodes {
                frontmatter {
                    title
                }
                slug
            }
        }
    }
`
