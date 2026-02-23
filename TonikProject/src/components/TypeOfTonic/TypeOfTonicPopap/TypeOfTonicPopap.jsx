import React, { useState, useEffect, useRef } from 'react';
import './TypeOfTonicPopap.css';
import LogoCdek from '../../../assets/Image/CDEK.png';
import Pek from '../../../assets/Image/Pek.png';
import Delove from '../../../assets/Image/DELOVELINII.png';

const SPECS = [
    { label: 'Масса нетто', value: '100 мл.' },
    { label: 'Назначение', value: 'Для поддержки иммунитета' },
    { label: 'Безопасность', value: 'Не содержит ГМО' },
    { label: 'Срок годности', value: '2 месяца с даты производства. См. дату на дне банки.' },
    { label: 'Происхождение сырья', value: 'Изготовлено из натурального растительного сырья.' },
    { label: 'Тип упаковки', value: 'Пластиковая банка с защитной мембраной под крышкой.' },
];

const CERTS = [
    { id: 1, name: 'Название сертификата', size: '20 Мб.' },
    { id: 2, name: 'Название сертификата', size: '20 Мб.' },
];

export function TypeOfTonicPopap({ product, onClose }) {
    const [qty, setQty] = useState(1);
    const overlayRef = useRef(null);

    useEffect(() => {
        const onKey = e => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    if (!product) return null;

    const handleOverlayClick = e => {
        if (e.target === overlayRef.current) onClose();
    };

    const formattedTotal = (product.price * qty).toLocaleString('ru-RU');

    return (
        <div className="pop_overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="pop_modal">
                <button className="pop_close" onClick={onClose} aria-label="Закрыть">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>

                <div className="pop_left">
                    {/* Хлебные крошки внутри левой части или сверху */}
                    <div className="pop_breadcrumbs">
                        Главная  ›  Каталог  ›  Страница товара
                    </div>
                    <div className="pop_photo_container">
                        <img src={product.image} alt={product.name} className="pop_main_img" />
                    </div>
                </div>

                <div className="pop_right">
                    <header className="pop_head">
                        <h2 className="pop_name">{product.name}</h2>
                        <span className="pop_price">{product.price.toLocaleString('ru-RU')} ₽</span>
                    </header>

                    <p className="pop_desc">
                        {product.description || 'Текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания текст описания.'}
                    </p>

                    <div className="pop_stock">В наличии 10 шт.</div>

                    <div className="pop_purchase_row">
                        <div className="pop_qty_selector">
                            <button onClick={() => setQty(q => Math.max(1, q - 1))}>—</button>
                            <span>{qty}</span>
                            <button onClick={() => setQty(q => q + 1)}>+</button>
                        </div>
                        <button className="pop_btn_buy">КУПИТЬ СЕЙЧАС</button>
                    </div>

                    {/* Кнопка: Добавить в корзину (на всю ширину с ценой) */}
                    <button className="pop_btn_cart">
                        <span>ДОБАВИТЬ В КОРЗИНУ</span>
                        <span className="pop_btn_total">{formattedTotal} ₽</span>
                    </button>

                    <section className="pop_section">
                        <h3 className="pop_section_title">ХАРАКТЕРИСТИКИ</h3>
                        <div className="pop_specs_list">
                            {SPECS.map((item, i) => (
                                <div key={i} className="pop_spec_item">
                                    <span className="pop_spec_label">{item.label}</span>
                                    <span className="pop_spec_value">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pop_section">
                        <h3 className="pop_section_title">СЕРТИФИКАТЫ</h3>
                        <div className="pop_certs_list">
                            {CERTS.map(cert => (
                                <div key={cert.id} className="pop_cert_item">
                                    <span className="pop_cert_name">{cert.name}</span>
                                    <div className="pop_cert_actions">
                                        <button className="pop_download_btn">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                                            Скачать
                                        </button>
                                        <span className="pop_cert_size">{cert.size}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="pop_section">
                        <h3 className="pop_section_title">ДОСТАВКА</h3>
                        <p className="pop_delivery_sub">Мы работаем со следующими компаниями:</p>
                        <div className="pop_delivery_logos">
                            <div className="pop_delivery_card"><img src={LogoCdek} alt="CDEK" /></div>
                            <div className="pop_delivery_card"><img src={Pek} alt="PEK" /></div>
                            <div className="pop_delivery_card"><img src={Delove} alt="Delovie Linii" /></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TypeOfTonicPopap;