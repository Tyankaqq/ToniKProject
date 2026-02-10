// src/components/Cart/Cart.jsx
import React, { useState, useCallback, useEffect } from 'react';
import './Cart.css';
import card1 from '../../../assets/Image/card1.svg';
import DeleteIcon from '../../../assets/Image/DeleteIcon.svg';

const Cart = ({ isOpen, onClose, isCheckout, setIsCheckout }) => {
    if (!isOpen) return null;

    // ✅ DEBUG: логируем изменения isCheckout
    useEffect(() => {
        console.log('🛒 Cart: isCheckout =', isCheckout);
    }, [isCheckout]);

    // ✅ Состояние корзины
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            img: card1,
            name: 'Название товара',
            price: 20000,
            description: 'Обыкновенная',
            quantity: 1,
            stock: 10
        }
    ]);

    // ✅ Функции для счетчика
    const updateQuantity = useCallback((itemId, newQuantity) => {
        if (newQuantity < 1) newQuantity = 1;
        if (newQuantity > 10) newQuantity = 10;

        setCartItems(prev =>
            prev.map(item =>
                item.id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }, []);

    const removeItem = useCallback((itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    }, []);

    // ✅ Расчет ИТОГО
    const totalSum = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // ✅ Форматирование цены
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
    };

    return (
        <div className="Cart_dropdown_container">
            <div className="Cart_backdrop" onClick={onClose} />
            <div className={`Cart_panel ${isOpen ? 'active' : ''}`}>
                <div className="Cart_panel_body">
                    {/* ✅ Логика переключения сцен - БЕЗ кнопки назад */}
                    {!isCheckout ? (
                        <div className="Scene_Cart">
                            {/* ✅ КОРЗИНА */}
                            <div className="Cart_items_scroll">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="Cart_item_card">
                                        <img src={item.img} alt="" className="Cart_item_img" />
                                        <div className="Cart_item_content">
                                            <div className="Cart_item_header">
                                                <div className="Cart_item_price">
                                                    {formatPrice(item.price)}
                                                </div>
                                                <button
                                                    className="Cart_delete_btn"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <img src={DeleteIcon} alt="Удалить" />
                                                </button>
                                            </div>
                                            <h3 className="Cart_item_name">{item.name}</h3>
                                            <p className="Cart_item_description">{item.description}</p>
                                            <div className="Cart_item_row">
                                                <div className="Cart_stock">
                                                    В наличии {item.stock} шт
                                                </div>
                                                <div className="Cart_counter">
                                                    <button
                                                        className="counter_minus"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        −
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        className="counter_plus"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* ✅ КНОПКА ОФОРМИТЬ ЗАКАЗ */}
                            <button className="Cart_btn_fixed" onClick={() => setIsCheckout(true)}>
                                <div className="Cart_btn_content">
                                    <span className="Cart_btn_text">Оформить заказ</span>
                                    <div className="Cart_btn_total">
                                        <span>{formatPrice(totalSum)}</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ) : (
                        <div className="Scene_Checkout">
                            {/* ✅ ФОРМА ОФОРМЛЕНИЯ - БЕЗ кнопки назад */}
                            <form className="Cart_form">
                                <input type="text" placeholder="Имя" required />
                                <input type="text" placeholder="Фамилия" required />
                                <input type="tel" placeholder="Телефон" required />
                                <input type="email" placeholder="Электронная почта" required />
                                <input type="text" placeholder="Адрес" required />
                                <div className="Form_select">
                                    <select>
                                        <option>Способ доставки</option>
                                    </select>
                                </div>
                                <label className="Form_checkbox">
                                    <input type="checkbox" required />
                                    <span className="checkbox_box"></span>
                                    <span>Принимаю условия обработки персональных данных</span>
                                </label>
                                <button type="submit" className="Cart_btn_next">
                                    <div className="Cart_btn_content">
                                        <span className="Cart_btn_text">Заказать</span>
                                        <div className="Cart_btn_total">
                                            <span>{formatPrice(totalSum)}</span>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
