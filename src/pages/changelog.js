import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function ChangelogPage() {
    return (
        <Layout>
            <SEO title={"Changelog"}/>
            <main>
                <div>
                    <h2>Changelog</h2>
                    <ul>
                        <li>2021-02-06 &ndash; Extracted out guide to it's own domain.</li>
                        <li>2021-01-31 &ndash; Updated layout.</li>
                        <li>2021-01-30 &ndash; Added December, January, and February.</li>
                        <li>2021-01-18 &ndash; Added September, October, and November.</li>
                        <li>2021-01-12 &ndash; Added July and August.</li>
                        <li>2021-01-10 &ndash; Added June. Added Negotiation Guide resource. Switched monthly pages to numbers instead of names.</li>
                        <li>2021-01-09 &ndash; Initialized guide. Added resources. Added April and May.</li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}
