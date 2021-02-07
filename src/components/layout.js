import React from 'react';
import Header from "./header";
import Footer from "./footer";
import "../assets/scss/main.scss";

export default function Layout({ children }) {
    return (
        <section className={"container"}>
            <Header />
            {children}
            <Footer />
        </section>
    );
}
