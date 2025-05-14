const buttonMode = document.querySelector('.modeColor');
const iconeMode = buttonMode.querySelector('i');
const body = document.body;
const theme = localStorage.getItem('theme');

if (theme === 'claro') {
    body.classList.add('lightMode');
    iconeMode.classList.replace('fa-moon', 'fa-sun');
    buttonMode.title = 'Light Mode';
}

buttonMode.addEventListener('click', () => {
    body.classList.toggle('lightMode');
    
    if (body.classList.contains('lightMode')) {
        iconeMode.classList.replace('fa-moon', 'fa-sun');
        buttonMode.title = 'Light Mode';
        localStorage.setItem('theme', 'claro');
    } else {
        iconeMode.classList.replace('fa-sun', 'fa-moon');
        buttonMode.title = 'Dark Mode';
        localStorage.setItem('theme', 'escuro');
    }
    event.currentTarget.classList.toggle('rotate');
});