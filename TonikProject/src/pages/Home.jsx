import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Tonics } from '../components/Tonics/Tonics';
import { Catalog } from '../components/Catalog/Catalog';
import { About } from '../components/About/About';
import { ContactForm } from '../components/ContactForm/ContactForm';
import './Home.css';
import Header from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {Partners} from "../components/Partners/Partners.jsx";
import {Blog} from "../components/Blog/Blog.jsx";
import {SeoText} from "../components/SeoText/SeoText.jsx";

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                 <Hero />
                 <Tonics />
                 <Catalog />
                 <About />
                 <ContactForm />
                 <Partners/>
                 <Blog/>
                 <ContactForm />
                 <SeoText/>
            </main>
            <Footer />
        </>
    );
};
