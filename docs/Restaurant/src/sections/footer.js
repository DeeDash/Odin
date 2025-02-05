export default function createFooter() {
    const header = document.createElement('footer');
    header.innerHTML = renderFooter();
    document.body.appendChild(header);
}

function renderFooter() {
    return `<p>&copy; 2025 Sangria. All rights reserved.</p>`
}