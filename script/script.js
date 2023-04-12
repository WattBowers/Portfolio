// modal functionality

//getting modal elements

const psdModal = document.getElementById('psdModal');
const wbwModal = document.getElementById('wbwModal');
const placeholderModal = document.getElementById('placeholderModal');
const giphyModal = document.getElementById('giphyModal')

//getting overlay elements

const psdOverlay = document.getElementById('psdOverlay');
const wbwOverlay = document.getElementById('wbwOverlay');
const placeholderOverlay = document.getElementById('placeholderOverlay');
const giphyOverlay = document.getElementById('giphyOverlay')

// getting modal opening button elements

const psdBtn = document.getElementById('psd');
const wbwBtn = document.getElementById('wbw');
const placeholderBtn = document.getElementById('placeholder');
const giphyBtn = document.getElementById('giphy')

//getting close button elements

const psdCloseBtn = document.getElementById('psdCloseBtn');
const wbwCloseBtn = document.getElementById('wbwCloseBtn');
const placeholderCloseBtn = document.getElementById('placeholderCloseBtn');
const giphyCloseBtn = document.getElementById('giphyCloseBtn')

//adding them to arrays to loop through
const btnArr = [psdBtn, wbwBtn, placeholderBtn, giphyBtn];
const modalArr = [psdModal, wbwModal, placeholderModal, giphyModal];
const OverlayArr = [psdOverlay, wbwOverlay, placeholderOverlay, giphyOverlay];
const closeBtnArr = [psdCloseBtn, wbwCloseBtn, placeholderCloseBtn, giphyCloseBtn];

//add event listeners to all of the buttons
for(let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('click', (e) => {
        e.preventDefault(); 
        modalArr[i].classList.remove('hidden');
        OverlayArr[i].classList.remove('hidden');
    })

    closeBtnArr[i].addEventListener('click', (e) => {
        e.preventDefault();
        modalArr[i].classList.add('hidden');
        OverlayArr[i].classList.add('hidden');
    })
}




