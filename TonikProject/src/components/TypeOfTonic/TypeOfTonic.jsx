import React from 'react';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import "./TypeOfTonic.css"
import TonicA from "../../assets/Image/TonicA.png"

export function TypeOfTonic() {
    const tonics = [
        { id: 1, name: "Tonic", image: TonicA, price: 200 },
        { id: 2, name: "Tonic", image: TonicA, price: 200 },
        { id: 3, name: "Tonic", image: TonicA, price: 200 },
        { id: 4, name: "Tonic", image: TonicA, price: 200 },
        { id: 5, name: "Tonic", image: TonicA, price: 200 },
        { id: 6, name: "Tonic", image: TonicA, price: 200 },
        { id: 7, name: "Tonic", image: TonicA, price: 200 },
        { id: 8, name: "Tonic", image: TonicA, price: 200 },
    ];

    return (
        <>
            <section className="TypeOfTonic_section container">
                <Breadcrumbs />

                <div className="TypeOfTonic_grid">
                    {tonics.map((tonic) => (
                        <a
                            key={tonic.id}
                            href={`/catalog/tonic/${tonic.name}`}
                            className={`TypeOfTonic_card TypeOfTonic_card-${tonic.id}`}
                        >
                            <div className="TypeOfTonic_card_image">
                                <img src={tonic.image} alt={tonic.name} />
                            </div>

                            <div className="TypeOfTonic_card_footer">
                                <h3 className="TypeOfTonic_card_title">
                                    {tonic.name}
                                </h3>
                                <p className="TypeOfTonic_card_price">
                                    {tonic.price} ₽
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}

export default TypeOfTonic;