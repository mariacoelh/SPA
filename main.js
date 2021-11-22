const app = {
    pages: [],
    show: new Event('show'),
    init: function () {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.tipo').forEach((link) => {
            link.addEventListener('click', app.tipo);
        })
        window.addEventListener('popstate', app.poppin);
    },
    tipo: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
}

function base64() {
    var codificacao = document.getElementById('base64').value;
    var base64 = window.btoa(unescape(encodeURIComponent(codificacao)))
    alert(`String CODIFICADA em Base64 é '${base64}'`);

    var base64Descodi = window.atob(unescape(encodeURIComponent(base64)))
    alert(`String DESCODIFICADA em Base64 é '${base64Descodi}'`);
}

function upperCase() {
    var codificacao = document.getElementById('upperCase').value;
    alert(`String convertida em UpperCase é '${codificacao.toUpperCase()}'`);
}

function lowerCase() {
    var codificacao = document.getElementById('lowerCase').value;
    alert(`String convertida em LowerCase é '${codificacao.toLowerCase()}'`);
}

function capitalCase() {
    var codificacao = document.getElementById('capitalCase').value;
    var codificacao2;
    codificacao2 = codificacao.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
    alert(`String convertida em CapitalCase é '${codificacao2}'`);
}

function properCase() {
    var codificacao = document.getElementById('properCase').value;
    alert(`String convertida em ProperCase é '${codificacao.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); })}'`);
}
document.addEventListener('DOMContentLoaded', app.init);