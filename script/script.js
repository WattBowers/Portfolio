// modal functionality

//getting modal elements

const psdModal = document.getElementById('psdModal');
const wbwModal = document.getElementById('wbwModal');
const placeholderModal = document.getElementById('placeholderModal');

//getting overlay elements

const psdOverlay = document.getElementById('psdOverlay');
const wbwOverlay = document.getElementById('wbwOverlay');
const placeholderOverlay = document.getElementById('placeholderOverlay');

// getting modal opening button elements

const psdBtn = document.getElementById('psd');
const wbwBtn = document.getElementById('wbw');
const placeholderBtn = document.getElementById('placeholder');

//getting close button elements

const psdCloseBtn = document.getElementById('psdCloseBtn');
const wbwCloseBtn = document.getElementById('wbwCloseBtn');
const placeholderCloseBtn = document.getElementById('placeholderCloseBtn');

//adding them to arrays to loop through
const btnArr = [psdBtn, wbwBtn, placeholderBtn];
const modalArr = [psdModal, wbwModal, placeholderModal];
const OverlayArr = [psdOverlay, wbwOverlay, placeholderOverlay];
const closeBtnArr = [psdCloseBtn, wbwCloseBtn, placeholderCloseBtn];

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




