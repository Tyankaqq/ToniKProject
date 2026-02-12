import React from 'react';
import './FAQ.css';

const FAQ = () => {
    const faqData = [
        {
            id: 1,
            type: 'medium',
            question: 'Можно ли совмещать Анфельцию с другими средствами?',
            answer: 'Да, Анфельция совместима с большинством продуктов и лекарственных средств, но для достижения наилучших результатов важно подобрать индивидуальный режим приема.'
        },
        {
            id: 2,
            type: 'medium',
            question: 'Подходит ли Анфельция всем?',
            answer: 'Да, продукт разработан для широкого круга людей – от тех, кто ищет поддержку иммунитета, до людей с высокими физическими и умственными нагрузками.'
        },
        {
            id: 3,
            type: 'large',
            question: 'Чем Анфельция отличается от других добавок?',
            answer: 'Анфельция восполняет дефицит витаминов или минералов – она помогает организму самостоятельно находить ресурсы для восстановления. Её клеточная структура содержит информацию о первозданных процессах жизни, что делает её уникальной.'
        },
        {
            id: 4,
            type: 'small',
            question: 'Есть ли научные исследования о свойствах Анфельций?',
            answer: 'Да, изучение Анфельции ведется уже многие годы. Научные работы подтверждают ее биоактивные свойства.'
        },
        {
            id: 5,
            type: 'medium',
            question: 'Что такое тоники жизни?',
            answer: 'Тоники жизни – натуральные комплексы для поддержки организма на глубинном уровне. Они восстанавливают баланс, поддерживают здоровье и адаптируют к изменениям среды.'
        },
        {
            id: 6,
            type: 'small',
            question: 'Как правильно принимать продукт?',
            answer: 'Способы приема зависят от формы выпуска. Для максимального эффекта важно учитывать особенности организма и текущие потребности – подробные рекомендации даны на упаковке.'
        }
    ];

    return (
        <section className="faq">
            <div className="container">
                <div className="faq__wrapper">
                    {/* Заголовок по центру */}
                    <h2 className="faq__title">Часто-задаваемые вопросы</h2>

                    {/* Карточки с абсолютным позиционированием */}
                    <div className="faq-card faq-card--medium faq-card-1">
                        <h3 className="faq-card__question">{faqData[0].question}</h3>
                        <p className="faq-card__answer">{faqData[0].answer}</p>
                    </div>

                    <div className="faq-card faq-card--medium faq-card-2">
                        <h3 className="faq-card__question">{faqData[1].question}</h3>
                        <p className="faq-card__answer">{faqData[1].answer}</p>
                    </div>

                    <div className="faq-card faq-card--large faq-card-3">
                        <h3 className="faq-card__question">{faqData[2].question}</h3>
                        <p className="faq-card__answer">{faqData[2].answer}</p>
                    </div>

                    <div className="faq-card faq-card--small faq-card-4">
                        <h3 className="faq-card__question">{faqData[3].question}</h3>
                        <p className="faq-card__answer">{faqData[3].answer}</p>
                    </div>

                    <div className="faq-card faq-card--medium faq-card-5">
                        <h3 className="faq-card__question">{faqData[4].question}</h3>
                        <p className="faq-card__answer">{faqData[4].answer}</p>
                    </div>

                    <div className="faq-card faq-card--small faq-card-6">
                        <h3 className="faq-card__question">{faqData[5].question}</h3>
                        <p className="faq-card__answer">{faqData[5].answer}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
