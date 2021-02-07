import React from "react"
import { Link } from "gatsby";

export default function Pagination({ previous, next }) {
    return (
        <div className="pagination">
            {previous === false ? null : (
                <>
                    {previous && (
                        <Link to={previous.fields.slug} aria-label={`Previous day ${previous.frontmatter.title}`} className={"pagination__previous"}>
                            {previous.frontmatter.title}
                        </Link>
                    )}
                </>
            )}
            {next === false ? null : (
                <>
                    {next && (
                        <Link to={next.fields.slug} aria-label={`Next day ${next.frontmatter.title}`} className={"pagination__next"}>
                            {next.frontmatter.title}
                        </Link>
                    )}
                </>
            )}
        </div>
    );
}