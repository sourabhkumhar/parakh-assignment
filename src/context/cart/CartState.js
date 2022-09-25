import React, { useState } from "react";
import CartContext from "./cartContext";

const CartState = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newcode, newname, newprice, newcategory, newqty) => {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].code === newcode && cart[i].category === newcategory) {
                cart[i].qty += newqty;
                return;
            }
        }

        cart.push({
            code: newcode,
            name: newname,
            price: newprice,
            category: newcategory,
            qty: newqty
        })
        setCart(cart)
        console.log("Product Added to the cart.")
        setTimeout(() => {
            console.log(cart)
        }, 100);
    }
    
    const removeFromCart = (removecode, removecategory) => {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].code === removecode && cart[i].category === removecategory) {
                break;
            }
        }
        cart.splice(i, 1)
        setCart(cart);
        console.log("Product removed from the cart.")
        console.log(cart)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;