body = document.querySelector('body');
document.querySelector('a').addEventListener('click', () => {
    if (body.classList.toggle('mirror'))
        body.style.backgroundImage = 'url(marina.jpg)';
    else body.style.backgroundImage = 'url(miller.jpg)';

})