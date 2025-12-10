import React from 'react';
import './BlogSection.css';
import blogImage1 from '../../../assets/Image/photo-1.jpg';
import blogImage2 from '../../../assets/Image/photo-2.jpg';
import blogImage3 from '../../../assets/Image/photo-3.jpg';

export const BlogSection = () => {
    const articles = [
        {
            id: 1,
            type: 'large',
            image: blogImage1,
            date: '10 июля 2025',
            title: 'Название статьи название статьи',
            excerpt: 'Текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст текст статьи текст статьи'
        },
        {
            id: 2,
            type: 'medium',
            image: blogImage2,
            date: '15 июля 2025',
            title: 'Название статьи название статьи',
            excerpt: 'Текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст текст статьи текст статьи'
        },
        {
            id: 3,
            type: 'medium',
            image: blogImage3,
            date: '16 июля 2025',
            title: 'Название статьи название статьи',
            excerpt: 'Текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст статьи текст текст статьи текст статьи'
        }
    ];

    return (
        <section className="BlogSection">
            <div className="BlogSection_container container">
                <h2 className="BlogSection_title">Читать подробнее</h2>

                <div className="BlogSection_grid">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className={`BlogSection_card BlogSection_card--${article.type}`}
                        >
                            <div className="BlogSection_card_image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="BlogSection_card_content">
                                <time className="BlogSection_card_date">{article.date}</time>
                                <h3 className="BlogSection_card_title">{article.title}</h3>
                                <p className="BlogSection_card_excerpt">{article.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <button className="BlogSection_button">показать еще</button>
            </div>
        </section>
    );
};
