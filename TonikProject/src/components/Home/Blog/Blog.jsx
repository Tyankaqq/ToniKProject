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
import blogImg8 from '../../../assets/Image/blog-8.jpg';
import blogImg9 from '../../../assets/Image/blog-9.jpg';
import blogImg10 from '../../../assets/Image/blog-10.jpg';

import Pointer from '../../../assets/Image/Pointer.svg';
import Search from '../../../assets/Image/search.svg';
import GalochkaPrime from '../../../assets/Image/GalochkaPrime.svg';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

export const Blog = ({
                         variant = 'default',
                         title = 'Блог',
                         showAllLink = true,
                         showSearchBar = false,
                         categories = []
                     }) => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const navigate = useNavigate();

    const handleArticleClick = (e, articleId) => {
        e.preventDefault();
        navigate(`/blog/${articleId}`);
    };

    const mainArticle = {
        id: 1,
        title: 'Название статьи ',
        tag: '#Текст текст',
        image: blogImg1
    };

    const articles = [
        {
            id: 2,
            title: 'Название статьи  ',
            tag: '#Текст текст',
            image: blogImg2
        },
        {
            id: 3,
            title: 'Название статьи  ',
            tag: '#Текст текст',
            image: blogImg3
        },
        {
            id: 4,
            title: 'Название статьи  ',
            tag: '#Текст текст',
            image: blogImg4
        },
        {
            id: 5,
            title: 'Название статьи  ',
            tag: '#Текст текст',
            image: blogImg5
        }
    ];

    const extendedArticles = [
        {
            id: 6,
            title: 'Название статьи ',
            tag: '#Текст текст',
            image: blogImg6
        },
        {
            id: 7,
            title: 'Название статьи ',
            tag: '#Текст текст',
            image: blogImg7
        },
        {
            id: 8,
            title: 'Название статьи ',
            tag: '#Текст текст',
            image: blogImg8
        },
        {
            id: 9,
            title: 'Название статьи ',
            tag: '#Текст текст',
            image: blogImg9
        }
    ];

    const largeArticle = {
        id: 10,
        title: 'Название статьи',
        tag: '#Текст текст',
        image: blogImg10
    };

    return (
        <section className={`Blog_section Blog_section--${variant}`}>
            <div className="Blog_container container">
                <Breadcrumbs />

                <div className="Blog_header">
                    <h2 className="Blog_title">{title}</h2>

                    {showAllLink && (
                        <a href="/blog" className="Blog_link">
                            ВСЕ СТАТЬИ
                            <img src={Pointer} alt="" />
                        </a>
                    )}

                    {showSearchBar && (
                        <div className="Blog_search">
                            <input
                                type="text"
                                placeholder="Поиск..."
                                className="Blog_search_input"
                            />
                            <img src={Search} alt="Search" className="Blog_search_icon" />
                        </div>
                    )}
                </div>

                {/* Категории для extended варианта */}
                {variant === 'extended' && categories.length > 0 && (
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
                    <div className="Blog_grid Blog_grid--chaotic">
                        {/* Карточка 1 */}
                        <div className="Blog_card_wrapper Blog_card_wrapper--1">
                            <a
                                href={`/blog/${mainArticle.id}`}
                                className="Blog_card Blog_card--1"
                                onClick={(e) => handleArticleClick(e, mainArticle.id)}
                            >
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={mainArticle.image}
                                        alt={mainArticle.title}
                                        className="Blog_card_image"
                                    />
                                </div>

                                <div className="Blog_card_overlay">
                                    <span className="Blog_card_tag_center">#РУБРИКА</span>
                                    <button className="Blog_card_btn_center" type="button">
                                        читать статью
                                        <img src={Pointer} alt="" />
                                    </button>
                                </div>
                            </a>
                            <h3 className="Blog_card_title_external">Название статьи </h3>
                        </div>

                        {/* Карточка 2 */}
                        <div className="Blog_card_wrapper Blog_card_wrapper--2">
                            <a
                                href={`/blog/${articles[0].id}`}
                                className="Blog_card Blog_card--2"
                                onClick={(e) => handleArticleClick(e, articles[0].id)}
                            >
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={articles[0].image}
                                        alt={articles[0].title}
                                        className="Blog_card_image"
                                    />
                                </div>

                                <div className="Blog_card_overlay">
                                    <span className="Blog_card_tag_center">#РУБРИКА</span>
                                    <button className="Blog_card_btn_center" type="button">
                                        читать статью
                                        <img src={Pointer} alt="" />
                                    </button>
                                </div>
                            </a>
                            <h3 className="Blog_card_title_external">Название статьи </h3>
                        </div>

                        {/* Карточка 3 */}
                        <div className="Blog_card_wrapper Blog_card_wrapper--3">
                            <a
                                href={`/blog/${articles[1].id}`}
                                className="Blog_card Blog_card--3"
                                onClick={(e) => handleArticleClick(e, articles[1].id)}
                            >
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={articles[1].image}
                                        alt={articles[1].title}
                                        className="Blog_card_image"
                                    />
                                </div>

                                <div className="Blog_card_overlay">
                                    <span className="Blog_card_tag_center">#РУБРИКА</span>
                                    <button className="Blog_card_btn_center" type="button">
                                        читать статью
                                        <img src={Pointer} alt="" />
                                    </button>
                                </div>
                            </a>
                            <h3 className="Blog_card_title_external">Название статьи </h3>
                        </div>

                        {/* Карточка 4 */}
                        <div className="Blog_card_wrapper Blog_card_wrapper--4">
                            <a
                                href={`/blog/${articles[2].id}`}
                                className="Blog_card Blog_card--4"
                                onClick={(e) => handleArticleClick(e, articles[2].id)}
                            >
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={articles[2].image}
                                        alt={articles[2].title}
                                        className="Blog_card_image"
                                    />
                                </div>

                                <div className="Blog_card_overlay">
                                    <span className="Blog_card_tag_center">#РУБРИКА</span>
                                    <button className="Blog_card_btn_center" type="button">
                                        читать статью
                                        <img src={Pointer} alt="" />
                                    </button>
                                </div>
                            </a>
                            <h3 className="Blog_card_title_external">Название статьи </h3>
                        </div>

                        {/* Карточка 5 */}
                        <div className="Blog_card_wrapper Blog_card_wrapper--5">
                            <a
                                href={`/blog/${articles[3].id}`}
                                className="Blog_card Blog_card--5"
                                onClick={(e) => handleArticleClick(e, articles[3].id)}
                            >
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={articles[3].image}
                                        alt={articles[3].title}
                                        className="Blog_card_image"
                                    />
                                </div>

                                <div className="Blog_card_overlay">
                                    <span className="Blog_card_tag_center">#РУБРИКА</span>
                                    <button className="Blog_card_btn_center" type="button">
                                        читать статью
                                        <img src={Pointer} alt="" />
                                    </button>
                                </div>
                            </a>
                            <h3 className="Blog_card_title_external">Название статьи </h3>
                        </div>
                    </div>
                )}




                {/* EXTENDED: оставил как было */}
                {variant === 'extended' && (
                    <>
                        {/* Первый блок: 1 большая слева + 4 маленьких справа */}
                        <div className="Blog_grid Blog_grid--default">
                            <a
                                href={`/blog/${mainArticle.id}`}
                                className="Blog_card Blog_card_large"
                                onClick={(e) => handleArticleClick(e, mainArticle.id)}
                            >
                                <div className="Blog_card_content">
                                    <span className="Blog_card_tag">{mainArticle.tag}</span>
                                    <h3 className="Blog_card_title">{mainArticle.title}</h3>
                                </div>
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={mainArticle.image}
                                        alt={mainArticle.title}
                                        className="Blog_card_image"
                                    />
                                </div>
                            </a>

                            {articles.map((article) => (
                                <a
                                    key={article.id}
                                    href={`/blog/${article.id}`}
                                    className="Blog_card Blog_card_small"
                                    onClick={(e) => handleArticleClick(e, article.id)}
                                >
                                    <div className="Blog_card_content">
                                        <span className="Blog_card_tag">{article.tag}</span>
                                        <h3 className="Blog_card_title">{article.title}</h3>
                                    </div>
                                    <div className="Blog_card_image_wrapper">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="Blog_card_image"
                                        />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Второй блок: 4 маленьких слева + 1 большая справа */}
                        <div className="Blog_grid Blog_grid--extended">
                            {extendedArticles.map((article) => (
                                <a
                                    key={article.id}
                                    href={`/blog/${article.id}`}
                                    className="Blog_card Blog_card_small"
                                    onClick={(e) => handleArticleClick(e, article.id)}
                                >
                                    <div className="Blog_card_content">
                                        <span className="Blog_card_tag">{article.tag}</span>
                                        <h3 className="Blog_card_title">{article.title}</h3>
                                    </div>
                                    <div className="Blog_card_image_wrapper">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="Blog_card_image"
                                        />
                                    </div>
                                </a>
                            ))}

                            <a
                                href={`/blog/${largeArticle.id}`}
                                className="Blog_card Blog_card_large Blog_card_large--extended"
                                onClick={(e) => handleArticleClick(e, largeArticle.id)}
                            >
                                <div className="Blog_card_content">
                                    <span className="Blog_card_tag">{largeArticle.tag}</span>
                                    <h3 className="Blog_card_title">{largeArticle.title}</h3>
                                </div>
                                <div className="Blog_card_image_wrapper">
                                    <img
                                        src={largeArticle.image}
                                        alt={largeArticle.title}
                                        className="Blog_card_image"
                                    />
                                </div>
                            </a>
                        </div>
                    </>
                )}

                {variant === 'extended' && (
                    <div className="Blog_load_more">
                        <button className="Blog_load_more_btn" type="button">
                            Смотреть больше
                            <img src={GalochkaPrime} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
