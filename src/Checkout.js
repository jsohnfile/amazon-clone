import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2>Hello {user?.email}</h2>
                    <h3 className="checkout__title">Your shopping Basket</h3>
                    {/* BasketItem */}
                    {basket.map(item => (
                        <FlipMove>
                            <CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating}/>

                        </FlipMove>
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
