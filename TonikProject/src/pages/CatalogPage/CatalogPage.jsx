import Header from "../../components/Home/Header/Header.jsx";
import {CatalogCategories} from "../../components/Catalog/Catalog/CatalogCategories.jsx";
import '../../index.css'
import FAQ from "../../components/Catalog/FAQ/FAQ.jsx";
import {ContactForm} from "../../components/Home/ContactForm/ContactForm.jsx";
import {SeoText} from "../../components/Home/SeoText/SeoText.jsx";
import {Footer} from "../../components/Home/Footer/Footer.jsx";
import React from "react";

export const CatalogPage = () => {
    return (
        <>
            <Header />
            <main>
                <div style={{backgroundColor: 'rgba(31, 31, 31, 1)', borderRadius: ''}}>
                    <CatalogCategories/>
                    <FAQ/>
                </div>
                    <ContactForm/>
                <div>
                    <SeoText/>
                </div>
            </main>
            <div style={{backgroundColor: 'rgba(31, 31, 31, 1)', borderRadius: ''}}>
                <Footer />
            </div>
        </>

    )
}