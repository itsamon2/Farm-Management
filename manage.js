let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.searchBx');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};
function toggleDropdown() {
    var dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function updateValues() {
    var dataInput = document.getElementById('dataInput').value;
    var valueInput = document.getElementById('valueInput').value;

    if (dataInput && valueInput) {
        var displayId = dataInput.toLowerCase() + 'Display';
        var displayElement = document.getElementById(displayId);
        if (displayElement) {
            displayElement.innerHTML = dataInput + ': ' + valueInput;
        } else {
            alert("Invalid Data Input");
        }
    }
    document.getElementById('dataInput').value = '';
    document.getElementById('valueInput').value = '';
    toggleDropdown();
}