import createHome from '../pages/home';
import createAbout from '../pages/about';
import createMenu from '../pages/menu';
import createContact from '../pages/contact';

export default function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = renderHeader();
    document.body.appendChild(header);
    addEventListeners();
}

function renderHeader() {
    return `
        <nav>
            <ul>
                <li><button id="home-btn">Home</button></li>
                <li><button id="menu-btn">Menu</button></li>
                <li><button id="about-btn">About</button></li>
                <li><button id="contact-btn">Contact</button></li>
            </ul>
        </nav>`
}

function addEventListeners() {
    const pages = {
        'home-btn': createHome,
        'menu-btn': createMenu,
        'about-btn': createAbout,
        'contact-btn': createContact,
    };

    Object.entries(pages).forEach(([id, pageFunction]) => {
        document.getElementById(id)?.addEventListener('click', () => {
            setTimeout(() => {
                pageFunction();
            }, 500)
        });
    });
}