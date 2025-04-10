import { Link } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
    const { cart } = useContext(CartContext);
    return (
        <header className="flex justify-between bg-black/80 backdrop-blur-md w-full py-1 px-5 text-white items-center fixed top-0 z-10">
            <div>
                <h1 className="font-wallpoet md:text-3xl text-2xl text-center hover:animate-pulse">
                    <Link to="/">EV</Link>
                </h1>
            </div>
            <nav>
                <ul className="flex gap-5.5 md:gap-7.5 font-st-mono text-[14px] font-light tracking-wider">
                    <NavLinkItem to="/">Home</NavLinkItem>
                    <NavLinkItem to="/collections">Catalog</NavLinkItem>
                    <NavLinkItem to="/cart">
                        Cart
                        {cart.length === 0
                            ? ""
                            : `(${cart.reduce(
                                  (acc, curr) => acc + curr.quantity,
                                  0
                              )})`}
                    </NavLinkItem>
                </ul>
            </nav>
        </header>
    );
}
