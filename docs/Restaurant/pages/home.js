import createMenu from './menu.js';

export default function createHome() {
    const content = document.getElementById('content');
    content.innerHTML = renderHome();
    document.getElementById('hero').querySelector('button').addEventListener('click', () => createMenu());
}

function renderHome() {
    return `
            <section id="hero">
                <h1>Welcome to Sangria</h1>
                <p>Discover our delicious menu and experience our warm hospitality.</p>
                <button>View Menu</button>
            </section>`
}