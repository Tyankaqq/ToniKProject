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
import '../index.css'

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <div className={'First_block'}>
                 <Hero />
                 <Tonics />
                 <Catalog />
                 <About />
                </div>
                 <ContactForm />
                <div className={'Second_block'} >
                 <Partners/>
                 <Blog/>
                </div>
                 <ContactForm />
                <div className={'Third_block'} >
                 <SeoText/>
                </div>
            </main>
            <div style={{backgroundColor: '#1e0d0d', borderRadius: ''}}>
            <Footer />
            </div>
        </>
    );
};
