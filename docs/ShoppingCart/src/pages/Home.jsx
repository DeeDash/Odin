import { Link } from "react-router-dom";

import Header from "../sections/Header";

export default function Home() {
    return (
        <>
            <Header />
            <div className="hero-content grid lg:grid-cols-[auto_60%] xl:grid-cols-2 max-lg:grid-rows-[auto_65%] h-screen">
                <div className="place-items-center content-center font-st-mono">
                    <h1 className="">Welcome to EV!</h1>
                    <Link
                        to="/collections"
                        className="font-wallpoet animate-pulse"
                    >
                        SHOP EV
                    </Link>
                </div>
                <div className="hero-image-wrapper overflow-hidden relative">
                    <img
                        className="grayscale absolute bottom-0 object-cover w-full"
                        src="../assets/hero.jpg"
                    />
                </div>
            </div>
        </>
    );
}
