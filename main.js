const toggleShow = document.getElementById('btn--show');
const myDiv = document.getElementById('dropdown--show');
const toggleHidden = document.getElementById('btn--hidden');
const overlay = document.getElementById('overlay');
const menuShow = document.getElementById('menu');
const menuPanel = document.getElementById('dropdown__hamburger-menu');

toggleShow.addEventListener('click', function () {
    myDiv.style.display = 'inherit';
    overlay.style.display = 'block';
});

toggleHidden.addEventListener('click', function () {
    myDiv.style.display = 'none';
    overlay.style.display = 'none';
});

menuShow.addEventListener('click', function () {
    if (menuShow.src.match('dist/img/header--hamburger-menu.svg')) {
        menuShow.src = '/dist/img/dropdown__hamburger-menu--cancel.svg';
        menuPanel.style.display = 'inherit';
    } else {
        menuPanel.style.display = 'none';

        menuShow.src = 'dist/img/header--hamburger-menu.svg';
    }
});
