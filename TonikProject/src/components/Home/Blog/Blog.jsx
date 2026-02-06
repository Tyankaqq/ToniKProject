import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

import blogImg1 from '../../../assets/Image/blog-1.jpg';
import blogImg2 from '../../../assets/Image/blog-2.jpg';
import blogImg3 from '../../../assets/Image/blog-3.jpg';
import blogImg4 from '../../../assets/Image/blog-4.jpg';
import blogImg5 from '../../../assets/Image/blog-5.jpg';
import blogImg6 from '../../../assets/Image/blog-6.jpg';
import blogImg7 from '../../../assets/Image/blog-7.jpg';

import Pointer from '../../../assets/Image/Pointer.svg';
import Search from '../../../assets/Image/search.svg';
import FilterIcon from '../../../assets/Image/voronka.svg';
import WhiteGalochka from '../../../assets/Image/whitegalochka.svg';
import SortIcon from '../../../assets/Image/SortIcon.svg';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

export const Blog = ({
                         variant = 'default',
                         title = 'Блог',
                         showAllLink = true,
                         showSearchBar = false,
                         categories = [],
                         showSelects = false
                     }) => {
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const [activeCategory, setActiveCategory] = useState('Все');
    const [selectedSort, setSelectedSort] = useState('Сортировка');
    const [showSectionDropdown, setShowSectionDropdown] = useState(false);
    const [selectedSections, setSelectedSections] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);
    const [selectedAuthors, setSelectedAuthors] = useState([]);

    // Календарь
    const [currentMonth, setCurrentMonth] = useState(8); // Сентябрь (0 = Январь)
    const [currentYear, setCurrentYear] = useState(2025);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startMonth, setStartMonth] = useState('Сентябрь');
    const [startYear, setStartYear] = useState('2025');
    const [endMonth, setEndMonth] = useState('Сентябрь');
    const [endYear, setEndYear] = useState('2025');

    const navigate = useNavigate();

    const handleArticleClick = (e, articleId) => {
        e.preventDefault();
        navigate(`/blog/${articleId}`);
    };

    const handleSectionToggle = (section) => {
        setSelectedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const handleAuthorToggle = (author) => {
        setSelectedAuthors(prev =>
            prev.includes(author)
                ? prev.filter(a => a !== author)
                : [...prev, author]
        );
    };

    // Календарь логика
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1; // Понедельник = 0
    };

    const handleDateClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day);

        if (!startDate || (startDate && endDate)) {
            // Начинаем новый выбор
            setStartDate(clickedDate);
            setEndDate(null);
        } else if (startDate && !endDate) {
            // Выбираем конечную дату
            if (clickedDate > startDate) {
                setEndDate(clickedDate);
            } else {
                setEndDate(startDate);
                setStartDate(clickedDate);
            }
        }
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const isDateInRange = (day) => {
        if (!startDate) return false;
        const date = new Date(currentYear, currentMonth, day);
        if (!endDate) return date.getTime() === startDate.getTime();
        return date >= startDate && date <= endDate;
    };

    const formatDate = (date) => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}.${month}.${year}`;
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // Пустые ячейки до первого дня
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="Blog_datepicker_day Blog_datepicker_day--empty"></div>);
        }

        // Дни текущего месяца
        for (let day = 1; day <= daysInMonth; day++) {
            const isInRange = isDateInRange(day);
            days.push(
                <button
                    key={`current-${day}`}
                    type="button"
                    className={`Blog_datepicker_day ${isInRange ? 'Blog_datepicker_day--selected' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </button>
            );
        }

        // Добавляем первые 5 дней следующего месяца
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

        for (let day = 1; day <= 5; day++) {
            const isInRange = isDateInRangeNextMonth(day, nextMonth, nextYear);
            days.push(
                <button
                    key={`next-${day}`}
                    type="button"
                    className={`Blog_datepicker_day Blog_datepicker_day--next-month ${isInRange ? 'Blog_datepicker_day--selected' : ''}`}
                    onClick={() => handleDateClickNextMonth(day, nextMonth, nextYear)}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    const isDateInRangeNextMonth = (day, month, year) => {
        if (!startDate) return false;
        const date = new Date(year, month, day);
        if (!endDate) return date.getTime() === startDate.getTime();
        return date >= startDate && date <= endDate;
    };

    const handleDateClickNextMonth = (day, month, year) => {
        const clickedDate = new Date(year, month, day);

        if (!startDate || (startDate && endDate)) {
            // Начинаем новый выбор
            setStartDate(clickedDate);
            setEndDate(null);
        } else if (startDate && !endDate) {
            // Выбираем конечную дату
            if (clickedDate > startDate) {
                setEndDate(clickedDate);
            } else {
                setEndDate(startDate);
                setStartDate(clickedDate);
            }
        }
    };

    const mainArticle = {
        id: 1,
        title: 'Название статьи ',
        tag: '#Текст текст',
        image: blogImg1
    };

    const articles = [
        { id: 2, title: 'Название статьи  ', tag: '#Текст текст', image: blogImg2 },
        { id: 3, title: 'Название статьи  ', tag: '#Текст текст', image: blogImg3 },
        { id: 4, title: 'Название статьи  ', tag: '#Текст текст', image: blogImg4 },
        { id: 5, title: 'Название статьи  ', tag: '#Текст текст', image: blogImg5 }
    ];

    const extendedArticles = [
        { id: 1, title: 'Название статьи ', tag: '#Текст текст', image: blogImg1 },
        { id: 2, title: 'Название статьи ', tag: '#Текст текст', image: blogImg2 },
        { id: 3, title: 'Название статьи ', tag: '#Текст текст', image: blogImg3 },
        { id: 4, title: 'Название статьи ', tag: '#Текст текст', image: blogImg4 },
        { id: 5, title: 'Название статьи ', tag: '#Текст текст', image: blogImg5 },
        { id: 6, title: 'Название статьи ', tag: '#Текст текст', image: blogImg6 },
        { id: 7, title: 'Название статьи ', tag: '#Текст текст', image: blogImg7 }
    ];

    const sections = ['Раздел 1', 'Раздел 2', 'Раздел 3', 'Раздел 4'];
    const authors = ['Иванов И.И.', 'Петров П.П.', 'Сидоров С.С.'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const years = ['2025', '2024', '2023', '2022'];

    return (
        <section className={`Blog_section Blog_section--${variant}`}>
            <div className="Blog_container container">
                <Breadcrumbs />

                {/* Заголовок - только для default */}
                {variant === 'default' && (
                    <div className="Blog_header">
                        <h2 className="Blog_title">{title}</h2>
                        {showAllLink && (
                            <a href="/blog" className="Blog_link">
                                ВСЕ СТАТЬИ
                                <img src={Pointer} alt="" />
                            </a>
                        )}
                    </div>
                )}

                {/* Селекты для extended варианта с showSelects */}
                {variant === 'extended' && showSelects && (
                    <>
                        <div className="Blog_filters">
                            <div className="Blog_filters_left">
                                {/* 1. Сортировка - с иконкой SortIcon */}
                                <div className="Blog_select_wrapper Blog_select_wrapper--sort">
                                    <select
                                        className="Blog_select"
                                        value={selectedSort}
                                        onChange={(e) => setSelectedSort(e.target.value)}
                                    >
                                        <option value="Сортировка" disabled>Сортировка</option>
                                        <option value="Название Я-А">Название Я-А</option>
                                        <option value="Название А-Я">Название А-Я</option>
                                        <option value="Порядок сперва новые">Порядок сперва новые</option>
                                        <option value="Порядок сперва старые">Порядок сперва старые</option>
                                        <option value="Порядок по умолчанию">Порядок по умолчанию</option>
                                    </select>
                                    <img src={SortIcon} alt="" className="Blog_select_sort_icon" />
                                </div>

                                {/* Кнопка "Фильтры" - только на планшете */}
                                <button
                                    className="Blog_filters_btn"
                                    onClick={() => setShowFiltersModal(!showFiltersModal)}
                                    type="button"
                                >
                                    Фильтры
                                    <img src={FilterIcon} alt="" />
                                </button>

                                {/* 2. Раздел - dropdown с checkbox + иконка (Desktop) */}
                                <div className="Blog_select_wrapper Blog_select_wrapper--section">
                                    <button
                                        className={`Blog_select Blog_select--with-icon ${showSectionDropdown ? 'active' : ''}`}
                                        onClick={() => setShowSectionDropdown(!showSectionDropdown)}
                                        type="button"
                                    >
                                        {selectedSections.length > 0 ? `Разделы (${selectedSections.length})` : 'Раздел'}
                                        <img src={WhiteGalochka} alt="" className="Blog_select_icon" />
                                    </button>

                                    {showSectionDropdown && (
                                        <div className="Blog_dropdown">
                                            {sections.map((section) => (
                                                <label key={section} className="Blog_dropdown_item">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSections.includes(section)}
                                                        onChange={() => handleSectionToggle(section)}
                                                    />
                                                    <span>{section}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* 3. Дата публикации - календарь + иконка (Desktop) */}
                                <div className="Blog_select_wrapper Blog_select_wrapper--date">
                                    <button
                                        className={`Blog_select Blog_select--with-icon ${showDatePicker ? 'active' : ''}`}
                                        onClick={() => setShowDatePicker(!showDatePicker)}
                                        type="button"
                                    >
                                        Дата публикации
                                        <img src={WhiteGalochka} alt="" className="Blog_select_icon" />
                                    </button>

                                    {showDatePicker && (
                                        <div className="Blog_datepicker">
                                            <div className="Blog_datepicker_header">
                                                {/* С (от) */}
                                                <div className="Blog_datepicker_range">
                                                    <span className="Blog_datepicker_label">С</span>
                                                    <div className="Blog_datepicker_selects_group">
                                                        <div className="Blog_datepicker_month_wrapper">
                                                            <select
                                                                className="Blog_datepicker_month_select"
                                                                value={months[currentMonth]}
                                                                onChange={(e) => {
                                                                    const monthIndex = months.indexOf(e.target.value);
                                                                    setCurrentMonth(monthIndex);
                                                                    setStartMonth(e.target.value);
                                                                }}
                                                            >
                                                                {months.map(month => (
                                                                    <option key={month} value={month}>{month}</option>
                                                                ))}
                                                            </select>
                                                            <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                        </div>
                                                        <div className="Blog_datepicker_year_wrapper">
                                                            <select
                                                                className="Blog_datepicker_year_select"
                                                                value={currentYear}
                                                                onChange={(e) => {
                                                                    const year = parseInt(e.target.value);
                                                                    setCurrentYear(year);
                                                                    setStartYear(e.target.value);
                                                                }}
                                                            >
                                                                {years.map(year => (
                                                                    <option key={year} value={year}>{year}</option>
                                                                ))}
                                                            </select>
                                                            <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* По (до) */}
                                                <div className="Blog_datepicker_range">
                                                    <span className="Blog_datepicker_label">По</span>
                                                    <div className="Blog_datepicker_selects_group">
                                                        <div className="Blog_datepicker_month_wrapper">
                                                            <select
                                                                className="Blog_datepicker_month_select"
                                                                value={endMonth}
                                                                onChange={(e) => setEndMonth(e.target.value)}
                                                            >
                                                                {months.map(month => (
                                                                    <option key={month} value={month}>{month}</option>
                                                                ))}
                                                            </select>
                                                            <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                        </div>
                                                        <div className="Blog_datepicker_year_wrapper">
                                                            <select
                                                                className="Blog_datepicker_year_select"
                                                                value={endYear}
                                                                onChange={(e) => setEndYear(e.target.value)}
                                                            >
                                                                {years.map(year => (
                                                                    <option key={year} value={year}>{year}</option>
                                                                ))}
                                                            </select>
                                                            <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Один календарь */}
                                            <div className="Blog_datepicker_calendar_single">
                                                <div className="Blog_datepicker_weekdays">
                                                    <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div>
                                                    <div>Пт</div><div>Сб</div><div>Вс</div>
                                                </div>
                                                <div className="Blog_datepicker_days">
                                                    {renderCalendarDays()}
                                                </div>
                                            </div>

                                            {/* Футер с навигацией */}
                                            <div className="Blog_datepicker_footer">
                                                <button
                                                    type="button"
                                                    className="Blog_datepicker_nav Blog_datepicker_nav--prev"
                                                    onClick={handlePrevMonth}
                                                >
                                                    <img src={WhiteGalochka} alt="Предыдущий месяц" />
                                                </button>
                                                <span className="Blog_datepicker_range_display">
                                                    {startDate && endDate ? (
                                                        <>
                                                            <span>С {formatDate(startDate)}</span>
                                                            <span className="Blog_datepicker_range_separator">по</span>
                                                            <span>{formatDate(endDate)}</span>
                                                        </>
                                                    ) : startDate ? (
                                                        `С ${formatDate(startDate)}`
                                                    ) : (
                                                        'Выберите диапазон'
                                                    )}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="Blog_datepicker_nav Blog_datepicker_nav--next"
                                                    onClick={handleNextMonth}
                                                >
                                                    <img src={WhiteGalochka} alt="Следующий месяц" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* 4. Автор - dropdown с checkbox + иконка (Desktop) */}
                                <div className="Blog_select_wrapper Blog_select_wrapper--author">
                                    <button
                                        className={`Blog_select Blog_select--with-icon ${showAuthorDropdown ? 'active' : ''}`}
                                        onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
                                        type="button"
                                    >
                                        {selectedAuthors.length > 0 ? `Авторы (${selectedAuthors.length})` : 'Автор'}
                                        <img src={WhiteGalochka} alt="" className="Blog_select_icon" />
                                    </button>

                                    {showAuthorDropdown && (
                                        <div className="Blog_dropdown">
                                            {authors.map((author) => (
                                                <label key={author} className="Blog_dropdown_item">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedAuthors.includes(author)}
                                                        onChange={() => handleAuthorToggle(author)}
                                                    />
                                                    <span>{author}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Поиск справа */}
                            {showSearchBar && (
                                <div className="Blog_search">
                                    <input
                                        type="text"
                                        placeholder="Поиск"
                                        className="Blog_search_input"
                                    />
                                    <img src={Search} alt="Search" className="Blog_search_icon" />
                                </div>
                            )}
                        </div>

                        {/* MOBILE FILTERS MENU - ВЫНЕСЕНО ВНЕ FILTERS (как в Header) */}
                        {showFiltersModal && (
                            <div className="Blog_filters_mobile_menu">
                                {/* Раздел */}
                                <div className="Blog_filters_mobile_item">
                                    <div className="Blog_filters_mobile_header">
                                        <span>РАЗДЕЛ</span>
                                        <button
                                            className="Blog_filters_mobile_toggle"
                                            onClick={() => setShowSectionDropdown(!showSectionDropdown)}
                                            type="button"
                                        >
                                            <span className={showSectionDropdown ? 'active' : ''}></span>
                                        </button>
                                    </div>
                                    {showSectionDropdown && (
                                        <div className="Blog_filters_mobile_submenu">
                                            {sections.map((section) => (
                                                <label key={section} className="Blog_dropdown_item">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSections.includes(section)}
                                                        onChange={() => handleSectionToggle(section)}
                                                    />
                                                    <span>{section}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Дата публикации */}
                                <div className="Blog_filters_mobile_item">
                                    <div className="Blog_filters_mobile_header">
                                        <span>ДАТА ПУБЛИКАЦИИ</span>
                                        <button
                                            className="Blog_filters_mobile_toggle"
                                            onClick={() => setShowDatePicker(!showDatePicker)}
                                            type="button"
                                        >
                                            <span className={showDatePicker ? 'active' : ''}></span>
                                        </button>
                                    </div>
                                    {showDatePicker && (
                                        <div className="Blog_filters_mobile_submenu">
                                            <div className="Blog_datepicker">
                                                <div className="Blog_datepicker_header">
                                                    {/* С (от) */}
                                                    <div className="Blog_datepicker_range">
                                                        <span className="Blog_datepicker_label">С</span>
                                                        <div className="Blog_datepicker_selects_group">
                                                            <div className="Blog_datepicker_month_wrapper">
                                                                <select
                                                                    className="Blog_datepicker_month_select"
                                                                    value={months[currentMonth]}
                                                                    onChange={(e) => {
                                                                        const monthIndex = months.indexOf(e.target.value);
                                                                        setCurrentMonth(monthIndex);
                                                                        setStartMonth(e.target.value);
                                                                    }}
                                                                >
                                                                    {months.map(month => (
                                                                        <option key={month} value={month}>{month}</option>
                                                                    ))}
                                                                </select>
                                                                <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                            </div>
                                                            <div className="Blog_datepicker_year_wrapper">
                                                                <select
                                                                    className="Blog_datepicker_year_select"
                                                                    value={currentYear}
                                                                    onChange={(e) => {
                                                                        const year = parseInt(e.target.value);
                                                                        setCurrentYear(year);
                                                                        setStartYear(e.target.value);
                                                                    }}
                                                                >
                                                                    {years.map(year => (
                                                                        <option key={year} value={year}>{year}</option>
                                                                    ))}
                                                                </select>
                                                                <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* По (до) */}
                                                    <div className="Blog_datepicker_range">
                                                        <span className="Blog_datepicker_label">По</span>
                                                        <div className="Blog_datepicker_selects_group">
                                                            <div className="Blog_datepicker_month_wrapper">
                                                                <select
                                                                    className="Blog_datepicker_month_select"
                                                                    value={endMonth}
                                                                    onChange={(e) => setEndMonth(e.target.value)}
                                                                >
                                                                    {months.map(month => (
                                                                        <option key={month} value={month}>{month}</option>
                                                                    ))}
                                                                </select>
                                                                <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                            </div>
                                                            <div className="Blog_datepicker_year_wrapper">
                                                                <select
                                                                    className="Blog_datepicker_year_select"
                                                                    value={endYear}
                                                                    onChange={(e) => setEndYear(e.target.value)}
                                                                >
                                                                    {years.map(year => (
                                                                        <option key={year} value={year}>{year}</option>
                                                                    ))}
                                                                </select>
                                                                <img src={WhiteGalochka} alt="" className="Blog_datepicker_icon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Один календарь */}
                                                <div className="Blog_datepicker_calendar_single">
                                                    <div className="Blog_datepicker_weekdays">
                                                        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div>
                                                        <div>Пт</div><div>Сб</div><div>Вс</div>
                                                    </div>
                                                    <div className="Blog_datepicker_days">
                                                        {renderCalendarDays()}
                                                    </div>
                                                </div>

                                                {/* Футер с навигацией */}
                                                <div className="Blog_datepicker_footer">
                                                    <button
                                                        type="button"
                                                        className="Blog_datepicker_nav Blog_datepicker_nav--prev"
                                                        onClick={handlePrevMonth}
                                                    >
                                                        <img src={WhiteGalochka} alt="Предыдущий месяц" />
                                                    </button>
                                                    <span className="Blog_datepicker_range_display">
                                                        {startDate && endDate ? (
                                                            <>
                                                                <span>С {formatDate(startDate)}</span>
                                                                <span className="Blog_datepicker_range_separator">по</span>
                                                                <span>{formatDate(endDate)}</span>
                                                            </>
                                                        ) : startDate ? (
                                                            `С ${formatDate(startDate)}`
                                                        ) : (
                                                            'Выберите диапазон'
                                                        )}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="Blog_datepicker_nav Blog_datepicker_nav--next"
                                                        onClick={handleNextMonth}
                                                    >
                                                        <img src={WhiteGalochka} alt="Следующий месяц" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Автор */}
                                <div className="Blog_filters_mobile_item">
                                    <div className="Blog_filters_mobile_header">
                                        <span>АВТОР</span>
                                        <button
                                            className="Blog_filters_mobile_toggle"
                                            onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
                                            type="button"
                                        >
                                            <span className={showAuthorDropdown ? 'active' : ''}></span>
                                        </button>
                                    </div>
                                    {showAuthorDropdown && (
                                        <div className="Blog_filters_mobile_submenu">
                                            {authors.map((author) => (
                                                <label key={author} className="Blog_dropdown_item">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedAuthors.includes(author)}
                                                        onChange={() => handleAuthorToggle(author)}
                                                    />
                                                    <span>{author}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Категории для extended без селектов */}
                {variant === 'extended' && categories.length > 0 && !showSelects && (
                    <div className="Blog_categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`Blog_category_btn ${
                                    activeCategory === category ? 'active' : ''
                                }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* DEFAULT: хаотичная сетка (5 карточек) */}
                {variant === 'default' && (
                    <>
                        <div className="Blog_grid Blog_grid--chaotic">
                            <div className="Blog_card_wrapper Blog_card_wrapper--1">
                                <a href={`/blog/${mainArticle.id}`} className="Blog_card Blog_card--1" onClick={(e) => handleArticleClick(e, mainArticle.id)}>
                                    <div className="Blog_card_image_wrapper">
                                        <img src={mainArticle.image} alt={mainArticle.title} className="Blog_card_image" />
                                    </div>
                                    <div className="Blog_card_overlay">
                                        <span className="Blog_card_tag_center">#РУБРИКА</span>
                                        <button className="Blog_card_btn_center" type="button">
                                            читать статью <img src={Pointer} alt="" />
                                        </button>
                                    </div>
                                </a>
                                <h3 className="Blog_card_title_external">Название статьи </h3>
                            </div>

                            {articles.map((article, index) => (
                                <div key={article.id} className={`Blog_card_wrapper Blog_card_wrapper--${index + 2}`}>
                                    <a href={`/blog/${article.id}`} className={`Blog_card Blog_card--${index + 2}`} onClick={(e) => handleArticleClick(e, article.id)}>
                                        <div className="Blog_card_image_wrapper">
                                            <img src={article.image} alt={article.title} className="Blog_card_image" />
                                        </div>
                                        <div className="Blog_card_overlay">
                                            <span className="Blog_card_tag_center">#РУБРИКА</span>
                                            <button className="Blog_card_btn_center" type="button">
                                                читать статью <img src={Pointer} alt="" />
                                            </button>
                                        </div>
                                    </a>
                                    <h3 className="Blog_card_title_external">Название статьи </h3>
                                </div>
                            ))}
                        </div>

                        <div className="Blog_grid Blog_grid--default">
                            <a href={`/blog/${mainArticle.id}`} className="Blog_card Blog_card_large" onClick={(e) => handleArticleClick(e, mainArticle.id)}>
                                <div className="Blog_card_image_wrapper">
                                    <img src={mainArticle.image} alt={mainArticle.title} className="Blog_card_image" />
                                </div>
                                <div className="Blog_card_content">
                                    <h3 className="Blog_card_title">{mainArticle.title}</h3>
                                </div>
                            </a>

                            {articles.map((article) => (
                                <a key={article.id} href={`/blog/${article.id}`} className="Blog_card Blog_card_small" onClick={(e) => handleArticleClick(e, article.id)}>
                                    <div className="Blog_card_image_wrapper">
                                        <img src={article.image} alt={article.title} className="Blog_card_image" />
                                    </div>
                                    <div className="Blog_card_content">
                                        <h3 className="Blog_card_title">{article.title}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {/* EXTENDED с селектами: хаотичная сетка (7 карточек) */}
                {variant === 'extended' && showSelects && (
                    <>
                        <div className="Blog_grid Blog_grid--extended-selects">
                            {extendedArticles.map((article, index) => (
                                <div key={article.id} className={`Blog_card_wrapper Blog_card_wrapper--ext-${index + 1}`}>
                                    <a href={`/blog/${article.id}`} className={`Blog_card Blog_card--ext-${index + 1}`} onClick={(e) => handleArticleClick(e, article.id)}>
                                        <div className="Blog_card_image_wrapper">
                                            <img src={article.image} alt={article.title} className="Blog_card_image" />
                                        </div>
                                        <div className="Blog_card_overlay">
                                            <span className="Blog_card_tag_center">#РУБРИКА</span>
                                            <button className="Blog_card_btn_center" type="button">
                                                читать статью <img src={Pointer} alt="" />
                                            </button>
                                        </div>
                                    </a>
                                    <h3 className="Blog_card_title_external">{article.title}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Адаптивная сетка для планшета и мобилки - используем extendedArticles */}
                        <div className="Blog_grid Blog_grid--default">
                            <a href={`/blog/${extendedArticles[0].id}`} className="Blog_card Blog_card_large" onClick={(e) => handleArticleClick(e, extendedArticles[0].id)}>
                                <div className="Blog_card_image_wrapper">
                                    <img src={extendedArticles[0].image} alt={extendedArticles[0].title} className="Blog_card_image" />
                                </div>
                                <div className="Blog_card_content">
                                    <h3 className="Blog_card_title">{extendedArticles[0].title}</h3>
                                </div>
                            </a>

                            {/* Рендерим 6 карточек для планшета (1-6) и 4 для мобилки (1-3), CSS скроет лишние */}
                            {extendedArticles.slice(1, 7).map((article) => (
                                <a key={article.id} href={`/blog/${article.id}`} className="Blog_card Blog_card_small" onClick={(e) => handleArticleClick(e, article.id)}>
                                    <div className="Blog_card_image_wrapper">
                                        <img src={article.image} alt={article.title} className="Blog_card_image" />
                                    </div>
                                    <div className="Blog_card_content">
                                        <h3 className="Blog_card_title">{article.title}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {/* EXTENDED без селектов: старая логика */}
                {variant === 'extended' && !showSelects && (
                    <>
                        <div className="Blog_grid Blog_grid--default">
                            <a href={`/blog/${mainArticle.id}`} className="Blog_card Blog_card_large" onClick={(e) => handleArticleClick(e, mainArticle.id)}>
                                <div className="Blog_card_content">
                                    <span className="Blog_card_tag">{mainArticle.tag}</span>
                                    <h3 className="Blog_card_title">{mainArticle.title}</h3>
                                </div>
                                <div className="Blog_card_image_wrapper">
                                    <img src={mainArticle.image} alt={mainArticle.title} className="Blog_card_image" />
                                </div>
                            </a>

                            {articles.map((article) => (
                                <a key={article.id} href={`/blog/${article.id}`} className="Blog_card Blog_card_small" onClick={(e) => handleArticleClick(e, article.id)}>
                                    <div className="Blog_card_content">
                                        <span className="Blog_card_tag">{article.tag}</span>
                                        <h3 className="Blog_card_title">{article.title}</h3>
                                    </div>
                                    <div className="Blog_card_image_wrapper">
                                        <img src={article.image} alt={article.title} className="Blog_card_image" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}

                {variant === 'extended' && (
                    <div className="Blog_load_more">
                        <button className="Blog_load_more_btn" type="button">
                            Показать больше
                            <img src={Pointer} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
