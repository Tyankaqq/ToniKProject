import React from "react";
import Header from "../../components/Home/Header/Header.jsx";
import {Partners} from "../../components/Home/Partners/Partners.jsx";
import partnerLogo from '../../assets/Image/partner-logo.svg';
import {ContactForm} from "../../components/Home/ContactForm/ContactForm.jsx";
import {SeoText} from "../../components/Home/SeoText/SeoText.jsx";
import {Footer} from "../../components/Home/Footer/Footer.jsx";

export const PartnersPage = () => {
    return (
        <>
            <Header />
            <main>
                <div className='partner_container'>
                    <Partners
                        variant="featured-double"
                        // Передаем текст для Hero-блока
                        heroText="Мы открыты к сотрудничеству с компаниями, которые разделяют наши ценности и готовы совершать открытия вместе с нами"

                        // Остальные пропсы для контента
                        featuredItems={[
                            {
                                title: 'Институт\nчеловека',
                                link: '#',
                            },
                            {
                                title: 'Суверенный\nкурс',
                                link: '#',
                                content: <img src={partnerLogo} alt="" />
                            }
                        ]}
                        // style={{borderRadius: '0'}} // Если это нужно, лучше тоже вынести в CSS класса .partner_container или .Partners_section
                    />
                </div>
                <ContactForm/>
                <div>
                    <SeoText/>
                </div>
            </main>
            <div style={{backgroundColor: '#1e0d0d'}}>
                <Footer />
            </div>
        </>
    )
}
