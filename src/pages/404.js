import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage() {
    return (
        <Layout>
            <SEO title={"Page Not Found"} />
            <main>
                <h1>The Phantom Thieves have stolen your heart... And this page.</h1>
                <p>Maybe you should leave this Palace and <Link to="/">head back home</Link>.</p>
            </main>
        </Layout>
    )
}
