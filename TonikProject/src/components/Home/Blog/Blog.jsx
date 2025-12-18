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
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

export const Blog = ({
                         variant = 'default',
                         title = 'Блог',
                         showAllLink = true,
                         showSearchBar = false,
                         categories = []
                     }) => {
    const [activeCategory, setActiveCategory] = useState('Все');
    const navigate = useNavigate();

    // Функция для перехода на страницу статьи
    const handleArticleClick = (e, articleId) => {
        e.preventDefault();
        navigate(`/blog/${articleId}`);
    };

    // Первая большая карточка (для default и extended)
    const mainArticle = {
        id: 1,
        title: 'Название статьи название статьи название статьи название статьи название статьи название статьи название статьи название статьи',
        tag: '#Текст текст',
        image: blogImg1
    };

    // 4 маленьких карточки (для default и extended)
    const articles = [
        {
            id: 2,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg2
        },
        {
            id: 3,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg3
        },
        {
            id: 4,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg4
        },
        {
            id: 5,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg5
        }
    ];

    // Дополнительные 4 маленьких карточки (только для extended)
    const extendedArticles = [
        {
            id: 6,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg6
        },
        {
            id: 7,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg7
        },
        {
            id: 8,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg8
        },
        {
            id: 9,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg9
        }
    ];

    // Вторая большая карточка (только для extended)
    const largeArticle = {
        id: 10,
        title: 'Название статьи название статьи название статьи название статьи название статьи название статьи название статьи название статьи',
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
                                className={`Blog_category_btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Default вариант: 1 большая + 4 маленьких = 5 карточек */}
                {variant === 'default' && (
                    <div className="Blog_grid Blog_grid--default">
                        {/* Большая карточка слева */}
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

                        {/* 4 маленьких карточки справа */}
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
                )}

                {/* Extended вариант: 1 большая + 4 маленьких + 4 маленьких + 1 большая = 10 карточек */}
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

                {/* Кнопка "Смотреть еще" для extended */}
                {variant === 'extended' && (
                    <div className="Blog_load_more">
                        <button className="Blog_load_more_btn">
                            Смотреть больше
                            <img src={GalochkaPrime} alt="" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
