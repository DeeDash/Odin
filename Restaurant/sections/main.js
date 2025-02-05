import createHome from '../pages/home';

export default function createMain() {
    const main = document.createElement('main');
    main.id = 'content';
    document.body.appendChild(main);
    createHome();
}