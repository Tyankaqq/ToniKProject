import Header from "../../components/Home/Header/Header.jsx";
import {ProductHero} from "../../components/Product/ProductHero/ProductHero.jsx";
import './ProductPage.css'
import {ProductInfo} from "../../components/Product/ProductInfo/ProductInfo.jsx";
import {ForWhom} from "../../components/Product/ForWhom/ForWhom.jsx";
import {BlogSection} from "../../components/Product/BlogSection/BlogSection.jsx";
import {ProductSelection} from "../../components/Product/ProductSelection/ProductSelection.jsx";
import {ContactForm} from "../../components/Home/ContactForm/ContactForm.jsx";
import {SeoText} from "../../components/Home/SeoText/SeoText.jsx";
import {Footer} from "../../components/Home/Footer/Footer.jsx";
import React from "react";
import {ProductAction} from "../../components/Product/ProductAction/ProductAction.jsx";
import {Blog} from "../../components/Home/Blog/Blog.jsx";
import {ProductHow} from "../../components/Product/ProductHow/ProductHow.jsx";
export const ProductPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className={'First_block'}>
                <ProductHero/>
                    <ProductInfo/>
                    <ProductHow/>
                    <ProductAction/>
                    <ForWhom/>

                    <ProductSelection/>
                    <Blog
                        variant="default"
                        showBreadcrumbs={false}   // ← скрываем на ProductPage
                    />
                </div>
                <ContactForm/>
                <div>
                    <SeoText/>
                </div>
            </main>
            <div style={{backgroundColor: '#1e0d0d', borderRadius: ''}}>
                <Footer />
            </div>

        </>
    )

}