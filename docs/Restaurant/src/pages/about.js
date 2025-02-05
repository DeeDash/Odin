export default function createAbout() {
    const content = document.getElementById('content');
    content.innerHTML = renderAbout();
}

function renderAbout() {
    return `
        <section id="about">
            <h2>About Us</h2>
            <p>We are a family-owned restaurant dedicated to serving delicious food using only the freshest ingredients.
            </p>
        </section>`
}