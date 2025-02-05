import createHome from '../pages/home';

export default function createMain() {
    createOverlay();
    addEventListeners();
    const main = document.createElement('main');
    main.id = 'content';
    document.body.appendChild(main);
    createHome();
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

}

function addEventListeners() {
    document.querySelectorAll('header button').forEach((button) => {
        button.addEventListener('click', () => {
            overlay.classList.add('active');
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 500)
        });
    });
}