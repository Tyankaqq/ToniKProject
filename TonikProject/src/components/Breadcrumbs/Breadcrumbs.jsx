// src/components/Breadcrumbs/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();

    // Маппинг путей на русские названия
    const pathNames = {
        '': 'Главная',
        'product': 'Анфельция',
        'tonics': 'Страница Тоники',
        'catalog': 'Каталог',
        'about': 'О компании',
        'partners': 'Партнеры',
        'blog': 'Блог',
    };

    // Разбиваем путь на части
    const pathArray = location.pathname.split('/').filter(x => x);

    // Не показываем на главной
    if (location.pathname === '/') {
        return null;
    }

    // Создаем массив для хлебных крошек
    const breadcrumbPath = [];

    // Для страницы /product: Главная > Тоники > Анфельция
    if (pathArray.includes('product')) {
        breadcrumbPath.push(
            { name: 'Главная', path: '/' },
            { name: 'Тоники', path: '/tonics' },
            { name: 'Анфельция', path: '/product' }
        );
    }
    // Для страницы /blog/:id: Главная > Блог > Страница статьи
    else if (pathArray[0] === 'blog' && pathArray.length > 1) {
        breadcrumbPath.push(
            { name: 'Главная', path: '/' },
            { name: 'Блог', path: '/blog' },
            { name: 'Страница статьи', path: location.pathname }
        );
    }
    // Обычный путь для других страниц
    else {
        breadcrumbPath.push({ name: 'Главная', path: '/' });
        pathArray.forEach((path, index) => {
            const routeTo = `/${pathArray.slice(0, index + 1).join('/')}`;
            breadcrumbPath.push({
                name: pathNames[path] || path,
                path: routeTo
            });
        });
    }

    return (
        <nav className="breadcrumbs">
            {breadcrumbPath.map((crumb, index) => {
                const isLast = index === breadcrumbPath.length - 1;

                return (
                    <span key={crumb.path} className="breadcrumb-item">
                        {index > 0 && <span className="breadcrumb-separator"> > </span>}
                        {isLast ? (
                            <span className="breadcrumb-current">{crumb.name}</span>
                        ) : (
                            <Link to={crumb.path} className="breadcrumb-link">
                                {crumb.name}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs;
