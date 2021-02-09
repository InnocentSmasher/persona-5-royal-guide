import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import CalendarHeader from "./calendar-header"

export default function MonthLayout({ children, title }) {
    let previous = {};
    let next = {};

    switch(title) {
        case 'April':
            previous = null;
            next.slug = '05';
            next.name = 'May';
            break;
        case 'May':
            previous.slug = '04';
            previous.name = 'April';
            next.slug = '06';
            next.name = 'June';
            break;
        case 'June':
            previous.slug = '05';
            previous.name = 'May';
            next.slug = '07';
            next.name = 'July';
            break;
        case 'July':
            previous.slug = '06';
            previous.name = 'June';
            next.slug = '08';
            next.name = 'August';
            break;
        case 'August':
            previous.slug = '07';
            previous.name = 'July';
            next.slug = '09';
            next.name = 'September';
            break;
        case 'September':
            previous.slug = '08';
            previous.name = 'August';
            next.slug = '10';
            next.name = 'October';
            break;
        case 'October':
            previous.slug = '09';
            previous.name = 'September';
            next.slug = '11';
            next.name = 'November';
            break;
        case 'November':
            previous.slug = '10';
            previous.name = 'November';
            next.slug = '12';
            next.name = 'December';
            break;
        case 'December':
            previous.slug = '11';
            previous.name = 'November';
            next.slug = '01';
            next.name = 'January';
            break;
        case 'January':
            previous.slug = '12';
            previous.name = 'December';
            next.slug = '02';
            next.name = 'February';
            break;
        case 'February':
            previous.slug = '01';
            previous.name = 'January';
            next = null;
            break;
        default:
            previous = null;
            next = null;
            break;
    }

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
                        <Link to={`../${previous.slug}`} className={"pagination__previous"}>
                            Go to {previous.name}
                        </Link>
                    )}
                    {next === null ? null : (
                        <Link to={`../${next.slug}`} className={"pagination__next"}>
                            Go to {next.name}
                        </Link>
                    )}
                </div>
            </main>
        </Layout>
    );
}
