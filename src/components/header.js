import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <header>
            <h1>Persona 5 Guide</h1>
            <Link to="/">Back to Guide</Link>
        </header>
    );
}