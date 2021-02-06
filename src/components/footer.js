import React from 'react';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>&copy; {new Date().getFullYear()} Chuck Hutchins</li>
                <li>Like this? <a href="https://ko-fi.com/innocentsmasher">Buy me a coffee.</a></li>
                <li>Made with <span role="img" aria-label="Skull">💀</span> in Michigan.</li>
            </ul>
        </footer>
    );
}