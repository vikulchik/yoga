;(function () {
    //$('select').select2();

    var button = document.querySelector('.aside_button'),
        aside = document.querySelector('.aside_item');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        aside.classList.toggle('active-aside');
    })
}());