import './sass/main.scss';
import headerTemplate from './templates/header.hbs';

const refs = {
    body: document.querySelector('body'),
}

function addHeader() {
refs.body.insertAdjacentHTML('afterbegin', headerTemplate());
}

addHeader();