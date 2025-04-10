import { Link, useLocation } from "react-router-dom";

export default function NavLinkItem({ to, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li>
            <Link
                to={to}
                className={`transition duration-700 rounded-full px-3 py-1 hover:bg-white hover:text-black ${
                    isActive ? "text-white" : "text-gray-500"
                }`}
            >
                {children}
            </Link>
        </li>
    );
}
