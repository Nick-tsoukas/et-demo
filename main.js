const openButton = document.getElementById('open');
const nav = document.getElementById('m_nav');
const close = document.getElementById('close');
openButton.addEventListener('click', (e) => {
    console.log(nav.classList.toggle('hide'));
});

close.addEventListener('click', (e) => {
    console.log('this is the close button')
    nav.classList.toggle('hide');
})