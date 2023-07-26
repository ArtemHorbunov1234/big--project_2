const toggleShow = document.getElementById('btn--show');
const myDiv = document.getElementById('dropdown--show');
const toggleHidden = document.getElementById('btn--hidden');
const overlay = document.getElementById('overlay');

toggleShow.addEventListener('click', function () {
    myDiv.style.display = 'inherit';
    overlay.style.display = 'block';
});

toggleHidden.addEventListener('click', function () {
    myDiv.style.display = 'none';
    overlay.style.display = 'none';
});
