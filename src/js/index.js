import '../scss/style.scss';
import Header from './modules/header.js';
import Footer from './modules/footer.js';

const headers = document.querySelectorAll('.header');
const footers = document.querySelectorAll('.footer');

headers.forEach(header => new Header(header));
footers.forEach(footer => new Footer(footer));