import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalprice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    return (
        <div className="cart">
            <h2>Your Courses</h2>
            <h5>enrolled Courses: {cart.length}</h5>
            <h4>Total: {totalprice} $</h4>
        </div>
    );
};

export default Cart;