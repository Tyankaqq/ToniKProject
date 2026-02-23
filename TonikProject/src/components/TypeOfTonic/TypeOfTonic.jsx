import React, { useState, useRef, useEffect, useCallback } from 'react';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import "./TypeOfTonic.css";
import TonicA from "../../assets/Image/TonicA.png";
import TypeOfTonicPopap from "./TypeOfTonicPopap/TypeOfTonicPopap.jsx";

const SORT_OPTIONS   = ['По умолчанию', 'Цена ↑', 'Цена ↓', 'Название А–Я', 'Название Я–А'];
const TONIC_TYPES    = ['АССОРТИМЕНТ ОД', 'НОВИНКИ', 'ОГРАНИЧЕННАЯ СЕРИЯ'];
const BENEFIT_TYPES  = ['КОНЦЕНТРИРОВАННЫЙ', 'КЛАССИЧЕСКИЙ', 'ПРЕМИУМ', 'СПОРТ', 'ОРГАНИК'];

const ALL_TONICS = [
    { id: 1, name: 'Tonic', image: TonicA, price: 200 },
    { id: 2, name: 'Tonic', image: TonicA, price: 200 },
    { id: 3, name: 'Tonic', image: TonicA, price: 200 },
    { id: 4, name: 'Tonic', image: TonicA, price: 200 },
    { id: 5, name: 'Tonic', image: TonicA, price: 200 },
    { id: 6, name: 'Tonic', image: TonicA, price: 200 },
    { id: 7, name: 'Tonic', image: TonicA, price: 200 },
    { id: 8, name: 'Tonic', image: TonicA, price: 200 },
];

const PRICE_MIN = 1;
const PRICE_MAX = 10000;

const SortIcon = () => (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="tot_icon_svg">
        <path d="M7 1v20M7 1L3 6M7 1l4 5M7 21L3 16M7 21l4-5"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const FilterIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="tot_icon_svg">
        <path d="M14.667 1H1l5.333 6.307v4.36L9.333 13V7.307L14.667 1Z"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="2"/>
        <path d="M21 21L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const ChevronIcon = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="tot_chevron">
        <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

function Checkbox({ checked, onToggle, label }) {
    return (
        <label className="tot_check_row" onClick={onToggle}>
            <span className={`tot_cb${checked ? ' tot_cb--on' : ''}`}>
                <svg viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1.5"
                          stroke="black" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
            <span className="tot_check_text">{label}</span>
        </label>
    );
}

function PriceSlider({ from, to, onFromChange, onToChange }) {
    const trackRef = useRef(null);
    const dragging = useRef(null);

    const getVal = useCallback(e => {
        const rect = trackRef.current.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
        return Math.round(PRICE_MIN + Math.max(0, Math.min(1, x / rect.width)) * (PRICE_MAX - PRICE_MIN));
    }, []);

    useEffect(() => {
        const move = e => {
            if (!dragging.current) return;
            const v = getVal(e);
            dragging.current === 'from'
                ? onFromChange(Math.min(v, to - 1))
                : onToChange(Math.max(v, from + 1));
        };
        const up = () => { dragging.current = null; };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseup', up);
        window.addEventListener('touchmove', move, { passive: true });
        window.addEventListener('touchend', up);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseup', up);
            window.removeEventListener('touchmove', move);
            window.removeEventListener('touchend', up);
        };
    }, [from, to, getVal, onFromChange, onToChange]);

    const pct = v => ((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

    return (
        <div className="tot_slider_wrap">
            <div className="tot_slider_track" ref={trackRef}>
                <div className="tot_slider_fill"
                     style={{ left: `${pct(from)}%`, width: `${pct(to) - pct(from)}%` }}/>
                <div className="tot_slider_thumb" style={{ left: `${pct(from)}%` }}
                     onMouseDown={() => { dragging.current = 'from'; }}
                     onTouchStart={() => { dragging.current = 'from'; }}/>
                <div className="tot_slider_thumb" style={{ left: `${pct(to)}%` }}
                     onMouseDown={() => { dragging.current = 'to'; }}
                     onTouchStart={() => { dragging.current = 'to'; }}/>
            </div>
            <div className="tot_slider_labels">
                <span>{PRICE_MIN}</span><span>{PRICE_MAX}+</span>
            </div>
        </div>
    );
}

function PriceBlock({ from, to, fromInput, toInput, onFromInput, onToInput, onFromChange, onToChange }) {
    return (
        <>
            <div className="tot_price_row">
                <div className="tot_price_box">
                    <span className="tot_price_box_label">ОТ</span>
                    <input className="tot_price_inp" type="text" inputMode="numeric"
                           value={fromInput} onChange={onFromInput}/>
                </div>
                <div className="tot_price_box">
                    <span className="tot_price_box_label">ДО</span>
                    <input className="tot_price_inp" type="text" inputMode="numeric"
                           value={toInput} onChange={onToInput}/>
                </div>
            </div>
            <PriceSlider from={from} to={to} onFromChange={onFromChange} onToChange={onToChange}/>
        </>
    );
}

function Pill({ id, openId, onToggle, icon, label, children }) {
    const ref = useRef(null);
    const isOpen = openId === id;

    useEffect(() => {
        if (!isOpen) return;
        const h = e => { if (ref.current && !ref.current.contains(e.target)) onToggle(null); };
        document.addEventListener('mousedown', h);
        return () => document.removeEventListener('mousedown', h);
    }, [isOpen, onToggle]);

    return (
        <div className="tot_pill_wrap" ref={ref}>
            <button
                className={`tot_pill${isOpen ? ' tot_pill--open' : ''}`}
                type="button"
                onClick={() => onToggle(isOpen ? null : id)}
            >
                {icon && <span className="tot_pill_icon">{icon}</span>}
                {label && <span className="tot_pill_label">{label}</span>}
                <ChevronIcon/>
            </button>
            {isOpen && children}
        </div>
    );
}


export function TypeOfTonic() {

    const [openPill, setOpenPill] = useState(null);

    const [sort,           setSort]           = useState('По умолчанию');
    const [tonicChecked,   setTonicChecked]   = useState({});
    const [benefitChecked, setBenefitChecked] = useState({});
    const [priceFrom,      setPriceFrom]      = useState(PRICE_MIN);
    const [priceTo,        setPriceTo]        = useState(PRICE_MAX);
    const [fromInput,      setFromInput]      = useState(String(PRICE_MIN));
    const [toInput,        setToInput]        = useState(String(PRICE_MAX));
    const [search,         setSearch]         = useState('');

    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggle = setter => key => setter(p => ({ ...p, [key]: !p[key] }));

    const syncFrom = v => { setPriceFrom(v); setFromInput(String(v)); };
    const syncTo   = v => { setPriceTo(v);   setToInput(String(v)); };

    const handleFromInput = e => {
        const raw = e.target.value.replace(/\D/g, '');
        setFromInput(raw);
        const n = +raw;
        if (n >= PRICE_MIN && n < priceTo) setPriceFrom(n);
    };
    const handleToInput = e => {
        const raw = e.target.value.replace(/\D/g, '');
        setToInput(raw);
        const n = +raw;
        if (n > priceFrom && n <= PRICE_MAX) setPriceTo(n);
    };

    const handleCardClick = (e, product) => {
        e.preventDefault();
        setSelectedProduct(product);
    };

    const tonics = ALL_TONICS.filter(t =>
        t.name.toLowerCase().includes(search.toLowerCase())
    );

    const SortDropdown = () => (
        <div className="tot_dropdown tot_dropdown--sort">
            {SORT_OPTIONS.map(opt => (
                <button key={opt}
                        className={`tot_sort_option${sort === opt ? ' tot_sort_option--active' : ''}`}
                        onClick={() => { setSort(opt); setOpenPill(null); }}>
                    {opt}
                </button>
            ))}
        </div>
    );

    const TonicDropdown = () => (
        <div className="tot_dropdown tot_dropdown--filter">
            {TONIC_TYPES.map(t => (
                <Checkbox key={t} checked={!!tonicChecked[t]}
                          onToggle={() => toggle(setTonicChecked)(t)} label={t}/>
            ))}
        </div>
    );

    const BenefitDropdown = () => (
        <div className="tot_dropdown tot_dropdown--filter">
            {BENEFIT_TYPES.map(t => (
                <Checkbox key={t} checked={!!benefitChecked[t]}
                          onToggle={() => toggle(setBenefitChecked)(t)} label={t}/>
            ))}
        </div>
    );

    const PriceDropdown = () => (
        <div className="tot_dropdown tot_dropdown--price">
            <PriceBlock
                from={priceFrom} to={priceTo}
                fromInput={fromInput} toInput={toInput}
                onFromInput={handleFromInput} onToInput={handleToInput}
                onFromChange={syncFrom} onToChange={syncTo}/>
        </div>
    );

    const AllFiltersDropdown = () => (
        <div className="tot_dropdown tot_dropdown--all-filters">
            <div className="tot_filter_col">
                <span className="tot_filter_col_title">ТИП ТОНИКА</span>
                {TONIC_TYPES.map(t => (
                    <Checkbox key={t} checked={!!tonicChecked[t]}
                              onToggle={() => toggle(setTonicChecked)(t)} label={t}/>
                ))}
            </div>
            <div className="tot_filter_col">
                <span className="tot_filter_col_title">ВИДЫ ПОЛЬЗЫ</span>
                {BENEFIT_TYPES.map(t => (
                    <Checkbox key={t} checked={!!benefitChecked[t]}
                              onToggle={() => toggle(setBenefitChecked)(t)} label={t}/>
                ))}
            </div>
            <div className="tot_filter_col tot_filter_col--price">
                <span className="tot_filter_col_title">ЦЕНА</span>
                <PriceBlock
                    from={priceFrom} to={priceTo}
                    fromInput={fromInput} toInput={toInput}
                    onFromInput={handleFromInput} onToInput={handleToInput}
                    onFromChange={syncFrom} onToChange={syncTo}/>
            </div>
        </div>
    );

    return (
        <section className="tot_section container">
            <Breadcrumbs/>

            <div className="tot_menu">

                <div className="tot_pills_desktop">
                    <Pill id="sort" openId={openPill} onToggle={setOpenPill}
                          icon={<SortIcon/>} label="СОРТИРОВКА">
                        <SortDropdown/>
                    </Pill>
                    <Pill id="tonic" openId={openPill} onToggle={setOpenPill}
                          label="ТИП ТОНИКА">
                        <TonicDropdown/>
                    </Pill>
                    <Pill id="benefit" openId={openPill} onToggle={setOpenPill}
                          label="ВИДЫ ПОЛЬЗЫ">
                        <BenefitDropdown/>
                    </Pill>
                    <Pill id="price" openId={openPill} onToggle={setOpenPill}
                          label="ЦЕНА">
                        <PriceDropdown/>
                    </Pill>
                </div>

                <div className="tot_pills_tablet">
                    <Pill id="sort" openId={openPill} onToggle={setOpenPill}
                          icon={<SortIcon/>} label="СОРТИРОВКА">
                        <SortDropdown/>
                    </Pill>
                    <Pill id="filters" openId={openPill} onToggle={setOpenPill}
                          icon={<FilterIcon/>} label="ФИЛЬТРЫ">
                        <AllFiltersDropdown/>
                    </Pill>
                </div>

                <div className="tot_pills_mobile">
                    <Pill id="sort" openId={openPill} onToggle={setOpenPill}
                          icon={<SortIcon/>}>
                        <SortDropdown/>
                    </Pill>
                    <Pill id="filters" openId={openPill} onToggle={setOpenPill}
                          icon={<FilterIcon/>}>
                        <AllFiltersDropdown/>
                    </Pill>
                </div>

                <form className="tot_search_pill" onSubmit={e => e.preventDefault()}>
                    <input className="tot_search_inp" type="text"
                           placeholder="Поиск..."
                           value={search} onChange={e => setSearch(e.target.value)}/>
                    <button className="tot_search_btn" type="submit" aria-label="Поиск">
                        <SearchIcon/>
                    </button>
                </form>
            </div>

            <div className="tot_grid">
                {tonics.map(t => (
                    <a key={t.id}
                       href={`/catalog/tonic/${t.name}`}
                       className={`tot_card tot_card--${t.id}`}
                       onClick={e => handleCardClick(e, t)}>
                        <div className="tot_card_img">
                            <img src={t.image} alt={t.name}/>
                        </div>
                        <div className="tot_card_foot">
                            <h3 className="tot_card_name">{t.name}</h3>
                            <p  className="tot_card_price">{t.price} ₽</p>
                        </div>
                    </a>
                ))}
            </div>

            {selectedProduct && (
                <TypeOfTonicPopap
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

        </section>
    );
}

export default TypeOfTonic;