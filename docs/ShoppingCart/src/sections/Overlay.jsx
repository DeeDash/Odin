import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Overlay({ children }) {
    const location = useLocation();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setIsTransitioning(true);

        const transitionOut = setTimeout(() => {
            setDisplayChildren(children);
            setIsTransitioning(false);
        }, 1000); // Adjust duration here to match your pulse timing

        return () => clearTimeout(transitionOut);
    }, [location.pathname, children]);

    return (
        <div className="relative">
            {isTransitioning && (
                <div className="fixed inset-0 bg-[#dfdfdf] z-50 flex justify-center items-center">
                    <h1 className="text-black text-5xl font-wallpoet animate-fast-pulse">
                        EV
                    </h1>
                </div>
            )}

            <div
                className={`transition-opacity duration-500 ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                }`}
            >
                {displayChildren}
            </div>
        </div>
    );
}
