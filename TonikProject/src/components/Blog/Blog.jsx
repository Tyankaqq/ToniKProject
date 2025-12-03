import React from 'react';
import './Blog.css';
import blogImg1 from '../../assets/Image/blog-1.svg';
import blogImg2 from '../../assets/Image/blog-2.svg';
import blogImg3 from '../../assets/Image/blog-3.svg';
import blogImg4 from '../../assets/Image/blog-4.svg';
import blogImg5 from '../../assets/Image/blog-5.svg';
import Pointer from '../../assets/Image/Pointer.svg';

export const Blog = () => {
    const mainArticle = {
        id: 1,
        title: 'Название статьи название статьи название статьи название статьи название статьи название статьи',
        tag: '#Текст текст',
        image: blogImg1,
        link: '#'
    };

    const articles = [
        {
            id: 2,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg2,
            link: '#'
        },
        {
            id: 3,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg3,
            link: '#'
        },
        {
            id: 4,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg4,
            link: '#'
        },
        {
            id: 5,
            title: 'Название статьи название статьи название статьи',
            tag: '#Текст текст',
            image: blogImg5,
            link: '#'
        }
    ];

    return (
        <section className="Blog_section">
            <div className="Blog_container container">
                <div className="Blog_header">
                    <h2 className="Blog_title">Блог</h2>
                    <a href="#" className="Blog_link">
                        ВСЕ СТАТЬИ
                        <img src={Pointer} />
                    </a>
                </div>

                <div className="Blog_grid">
                    {/* Большая карточка */}
                    <a href={mainArticle.link} className="Blog_card Blog_card_large">
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

                    {/* Маленькие карточки */}
                    {articles.map((article) => (
                        <a key={article.id} href={article.link} className="Blog_card Blog_card_small">
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
            </div>
        </section>
    );
};
