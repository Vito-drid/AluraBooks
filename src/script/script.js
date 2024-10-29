document.getElementById('menu-toggle').addEventListener('change', function() {
    document.querySelector('.burger-2').classList.toggle('is-closed', this.checked);
});


document.querySelector('.nav-hearts').addEventListener('click', function() {
    var heartFullIcon = this.querySelector('.heart-full-icon');
    var heartIcon = this.querySelector('.heart-icon');

    heartFullIcon.style.display = 'inline-block';
    heartIcon.style.display = 'none';

    setTimeout(function() {
        heartFullIcon.style.display = 'none';
        heartIcon.style.display = 'inline-block';
    }, 500);
});