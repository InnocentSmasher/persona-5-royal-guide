import React from 'react';
import KofiLogo from '../assets/svgs/kofi.svg';
import GitHubLogo from '../assets/svgs/github.svg';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>Made with <span role="img" aria-label="Skull">💀</span> in Michigan.</li>
                <li className="icon-links"><a href="https://ko-fi.com/innocentsmasher" aria-label="Buy me a coffee"><KofiLogo /></a><a href="https://github.com/InnocentSmasher/persona-5-royal-guide" aria-label="Check it out on GitHub"><GitHubLogo /></a></li>
            </ul>
            <p className="disclaimer">This site is not affiliated with ATLUS or SEGA.</p>
        </footer>
    );
}