import React from "react"

export default function ArcanaNeeded({ arcana }) {
    return (
        <div className="arcana-needed">
            <h2>Arcana Needed:</h2>
            <ul>
                {arcana.map((item, i) => [
                    <li key={i}>
                        {item}
                    </li>
                ])}
            </ul>
        </div>
    )
}