import { useContext, useState } from "react";

import Header from "../sections/Header";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function Collections() {
    return (
        <>
            <Header />
            <ProductListing />
        </>
    );
}

function ProductListing() {
    const { products } = useContext(ProductContext);

    return (
        <div className="grid gap-1 grid-cols-2 px-3 mt-[4rem] md:grid-cols-3 md:px-5 lg:grid-cols-4 lg:px-10 xl:grid-cols-5 xl:px-20">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useContext(CartContext);

    function handleQuantityChange(action) {
        switch (action) {
            case "increment":
                setQuantity((prev) => prev + 1);
                break;

            case "decrement":
                if (quantity > 1) {
                    setQuantity((prev) => prev - 1);
                }
                break;

            default:
                break;
        }
    }

    return (
        <div className="product-card p-3 flex flex-col justify-between font-st-mono group bg-white rounded-[5px] hover:scale-101 transition duration-700 shadow-[0px_0px_30px_rgba(255,255,255,0.7)]">
            <div className="product-image-wrapper aspect-1 h-[280px] relative overflow-hidden flex justify-center items-center">
                <img
                    className="product-image object-contain max-h-1/1 grayscale group-hover:grayscale-0 transition duration-700"
                    src={product.image}
                />
            </div>
            <div className="product-title line-clamp-2 my-[10px]">
                {product.title}
            </div>
            <div className="product-price">${product.price}</div>
            <div className="product-atc-wrapper flex justify-center mt-[10px] min-[501px]:gap-5 max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-2">
                <div className="product-quantity flex gap-5 border px-[10px] rounded-[5px] max-[500px]:w-min">
                    <button
                        className="hover:text-gray-500 transition"
                        onClick={() => handleQuantityChange("decrement")}
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="hover:text-gray-500 transition"
                        onClick={() => handleQuantityChange("increment")}
                    >
                        +
                    </button>
                </div>
                <button
                    className="product-atc px-[5px] text-green-900 hover:black transition"
                    onClick={() => addToCart(product, quantity)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
