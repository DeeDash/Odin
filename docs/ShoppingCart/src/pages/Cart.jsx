import { useContext, useState } from "react";
import Header from "../sections/Header";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    return (
        <>
            <Header />
            <CartList />
        </>
    );
}

function CartList() {
    const { cart } = useContext(CartContext);
    return cart.length === 0 ? (
        <div className="max-w-1/2 m-auto justify-center h-screen flex items-center font-st-mono grayscale text-center">
            Cart is currently empty
        </div>
    ) : (
        <div className="mx-[10px] mt-[4rem] lg:max-w-1/2 lg:mx-auto">
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
}

function CartItem({ item }) {
    const { updateCart } = useContext(CartContext);

    function handleQuantityChange(action) {
        switch (action) {
            case "increment":
                updateCart({ ...item, quantity: item.quantity + 1 });
                break;

            case "decrement":
                updateCart({ ...item, quantity: item.quantity - 1 });
                break;

            case "delete":
                updateCart({ ...item, quantity: 0 });
                break;
        }
    }
    return (
        <div className="cart-item grid gird-cols-[80px_1fr] grid-flow-col justify-between px-[25px] py-[10px] my-[20px] font-st-mono group bg-white rounded-2xl">
            <div className="cart-image-wrapper row-span-3 col-span-1 aspect-square relative overflow-hidden h-1/1 flex items-center">
                <img
                    className="cart-image object-contain max-h-[100px] grayscale group-hover:grayscale-0 transition duration-700"
                    src={item.image}
                />
            </div>
            <div className="cart-title text-right mb-[10px] max-lg:line-clamp-2">
                {item.title}
            </div>
            <div className="cart-price text-right mb-[10px]">${item.price}</div>
            <div className="cart-quantity-delete-wrapper justify-end flex">
                <button
                    className="text-red-400"
                    onClick={() => handleQuantityChange("delete")}
                >
                    Remove
                </button>
                <div className="cart-quantity text-right product-quantity flex gap-5 border px-[10px] rounded-[5px] ml-[10px]">
                    <button onClick={() => handleQuantityChange("decrement")}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange("increment")}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
