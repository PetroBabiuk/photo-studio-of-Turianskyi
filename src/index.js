import './sass/main.scss';
import headerTemplate from './templates/header.hbs';
import galleryTemplate from './templates/gallery.hbs';

const PIXELLU_URL = 'https://img.pixellu.gallery/gal/aws/4k/1x/';
const items = [
    {
        id: 1,
        src: `${PIXELLU_URL}u61473/34932e5c8ebdc08249846ea56b5d4c/e1211087c7c79f627c2f.jpg`,
    },
    {
        id: 2,
        src: `${PIXELLU_URL}u61473/f6f18715acfc5405bf26dd74693f04/22107e98a6df43c21646.jpg`,
    },
    {
        id: 3,
        src: `${PIXELLU_URL}u61473/e51974fdf2c3e4ad0ea1f03471b3b3/8fd8225e4b98415f589e.jpg`,
    },
    {
        id: 4,
        src: `${PIXELLU_URL}u61473/34932e5c8ebdc08249846ea56b5d4c/6c1b3d1a0a280aceb4ea.jpg`,
    },
    {
        id: 5,
        src: `${PIXELLU_URL}u61473/34932e5c8ebdc08249846ea56b5d4c/3ae71f754828522f867f.jpg`,
    },
    {
        id: 6,
        src: `${PIXELLU_URL}u61473/e51974fdf2c3e4ad0ea1f03471b3b3/12e87eddef6e6b300cce.jpg`,
    },
    {
        id: 7,
        src: `${PIXELLU_URL}u61473/e51974fdf2c3e4ad0ea1f03471b3b3/8feac54b9d6997fe97da.jpg`,
    },
    {
        id: 8,
        src: `${PIXELLU_URL}u61473/e51974fdf2c3e4ad0ea1f03471b3b3/ca98ab416d387fed76c3.jpg`,
    },
    {
        id: 9,
        src: `${PIXELLU_URL}u61473/b321e848d4856ce3ab53229058fded/f2c7a05d7f600a5bf7e5.jpg`,
    },
    {
        id: 10,
        src: `${PIXELLU_URL}u61473/2fbcc83a14d155c492ac3b10cb7002/382f86914061c10b9f45.jpg`,
    },
    {
        id: 11,
        src: `${PIXELLU_URL}u61473/b321e848d4856ce3ab53229058fded/50cc2c72e9bddf379a64.jpg`,
    },
];

const refs = {
    body: document.querySelector('body'),
}

function renderHeader() {
refs.body.insertAdjacentHTML('afterbegin', headerTemplate());
}

function renderGallery() {
    console.log(items);
    refs.body.insertAdjacentHTML('beforeend', galleryTemplate(items));
}
renderHeader();
renderGallery();