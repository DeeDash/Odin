import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Collections from "./pages/Collections.jsx";
import Cart from "./pages/Cart.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import Overlay from "./sections/Overlay.jsx";
import Header from "./sections/Header.jsx";

import "./main.css";

/*
username: deedash
email: deedash@example.com
password: deedash123
userId: 11
*/

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Overlay>
                <Home />
            </Overlay>
        ),
    },
    {
        path: "collections",
        element: (
            <Overlay>
                <Collections />
            </Overlay>
        ),
    },
    {
        path: "cart",
        element: (
            <Overlay>
                <Cart />
            </Overlay>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <ProductProvider>
        <CartProvider>
            <StrictMode>
                <RouterProvider router={router} />
            </StrictMode>
        </CartProvider>
    </ProductProvider>
);
