import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import CalendarHeader from "./calendar-header"

export default function MonthLayout({ children, title, previous, next }) {
    return (
        <Layout>
            <SEO title={title}/>
            <main className="month">
                <div className="month__header">
                    <h1>{title}</h1>
                    <Link to="/">Back to Guide</Link>
                </div>
                <div>
                    <CalendarHeader />
                    { children }
                </div>
                <div className="pagination">
                    {previous === null ? null : (
                        <Link to={`../${previous.toLowerCase()}`} className={"pagination__previous"}>
                            Go to {previous}
                        </Link>
                    )}
                    {next === null ? null : (
                        <Link to={`../${next.toLowerCase()}`} className={"pagination__next"}>
                            Go to {next}
                        </Link>
                    )}
                </div>
            </main>
        </Layout>
    );
}
