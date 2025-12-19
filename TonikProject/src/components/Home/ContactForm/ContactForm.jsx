import React, { useState } from 'react';
import './ContactForm.css';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Здесь логика отправки формы
    };

    return (
        <section className="ContactForm_section section-light">
            <div className="ContactForm_container container">
                <div className="ContactForm_content">
                    <h2 className="ContactForm_title">
                        ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ<br />
                        ДВИЖЕНИЮ ЗА ЗДОРОВЫЙ<br />
                        И ОСОЗНАННЫЙ ОБРАЗ ЖИЗНИ.
                    </h2>

                    <p className="ContactForm_description">
                        Если вы являетесь представителями отрасли сельского хозяйства (земледелие, животноводство, птицеводство, рыбоводство)
                        и разделяете наши ценности, мы приглашаем
                        вас к сотрудничеству
                        с командой Тоников Жизни.
                    </p>
                </div>

                <form className="ContactForm_form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        className="ContactForm_input"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        className="ContactForm_input"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Электронная почта"
                        value={formData.email}
                        onChange={handleChange}
                        className="ContactForm_input"
                        required
                    />

                    <input
                        name="message"
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={handleChange}
                        className="ContactForm_textarea"
                        required
                    />

                    {/* Обертка для checkbox и кнопки */}
                    <div className="ContactForm_footer">
                        <label className="ContactForm_checkbox">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                required
                            />
                            <span>Принимаю условия обработки персональных данных.</span>
                        </label>

                        <button type="submit" className="ContactForm_button">
                            Отправить сообщение
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
