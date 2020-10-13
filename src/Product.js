import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import GradeIcon from "@material-ui/icons/Grade";

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <GradeIcon className="product__star"/>
                ))}
                </div>
            </div>
            <img src={ image } alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
