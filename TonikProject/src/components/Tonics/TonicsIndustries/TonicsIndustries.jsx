import React, { useState, useEffect } from 'react';
import './TonicsIndustries.css';

const TonicsIndustries = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 767);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <section className="TonicsIndustries_section">

            {/* DESKTOP + TABLET — заголовки по бокам, текст по центру */}
            {!isMobile && (
                <>
                    <h2 className="TonicsIndustries_title TonicsIndustries_title--left">
                        Тоники
                    </h2>
                    <div className="TonicsIndustries_info container">
                        <p className="TonicsIndustries_text">
                            Тоники Жизни — это реликтовые творения нашей планеты,
                            созданные и сохраненные природой для восстановления
                            естественных настроек живых организмов.
                        </p>
                    </div>
                    <h2 className="TonicsIndustries_title TonicsIndustries_title--right">
                        жизни
                    </h2>
                </>
            )}

            {/* MOBILE — сверху заголовок, текст, снизу заголовок */}
            {isMobile && (
                <div className="TonicsIndustries_mobile_wrap">
                    <h2 className="TonicsIndustries_title">Тоники</h2>
                    <div className="TonicsIndustries_info">
                        <p className="TonicsIndustries_text">
                            Тоники Жизни — это реликтовые творения нашей планеты,
                            созданные и сохраненные природой для восстановления
                            естественных настроек живых организмов.
                        </p>
                    </div>
                    <h2 className="TonicsIndustries_title">жизни</h2>
                </div>
            )}

        </section>
    );
};

export default TonicsIndustries;
