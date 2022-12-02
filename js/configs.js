var btnDarkMode = document.querySelector("#btnDarkMode");
var btnLightMode = document.querySelector("#btnLightMode");
var tema = document.querySelector("#theme");

btnDarkMode.addEventListener('click', function toggleTheme() {
    var tema = document.getElementsByTagName('link')[0];

    if (tema.getAttribute('href') == '../css/DarkMode.css') {
        tema.setAttribute('href', '../css/LightMode.css');
    } else {
        theme.setAttribute('href', '../css/DarkMode.css');
    }
});
btnLightMode.addEventListener('click', function toggleTheme() {
    var tema = document.getElementsByTagName('link')[0];

    if (tema.getAttribute('href') == '../css/LightMode.css') {
        tema.setAttribute('href', '../css/DarkMode.css');
    } else {
        theme.setAttribute('href', '../css/LightMode.css');
    }
});
/* botões dos elementos inicia */
var buttonToxina = document.querySelector("#btnToxina");
var buttonGlacial = document.querySelector("#btnGlacial");
var buttonEletrico = document.querySelector("#btnEletrico");
var buttonRadiacao = document.querySelector("#btnRadiacao");
var buttonMagnetismo = document.querySelector("#btnMagnetismo");
var buttonIgnio = document.querySelector("#btnIgnio");
var buttonGasoso = document.querySelector("#btnGasoso");
var buttonCorrosivo = document.querySelector("#btnCorrosivo");
var buttonViral = document.querySelector("#btnViral");
var buttonColisivo = document.querySelector("#btnColisivo");

var conteudoToxina = document.querySelector("#conteudoToxina");
var conteudoGlacial = document.querySelector("#conteudoGlacial");
var conteudoEletrico = document.querySelector("#conteudoEletrico");
var conteudoRadiacao = document.querySelector("#conteudoRadiacao");
var conteudoMagnestismo = document.querySelector("#conteudoMagnetismo");
var conteudoIgnio = document.querySelector("#conteudoIgnio");
var conteudoGasoso = document.querySelector("#conteudoGasoso");
var conteudoCorrosivo = document.querySelector("#conteudoCorrosivo");
var conteudoViral = document.querySelector("#conteudoViral");
var conteudoColisivo = document.querySelector("#conteudoColisivo");


buttonToxina.addEventListener('click', function () {

    if (conteudoToxina.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoToxina.style.display = 'block';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonGlacial.addEventListener('click', function () {

    if (conteudoGlacial.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoGlacial.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonEletrico.addEventListener('click', function () {

    if (conteudoEletrico.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoEletrico.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonRadiacao.addEventListener('click', function () {

    if (conteudoRadiacao.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoRadiacao.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonMagnetismo.addEventListener('click', function () {

    if (conteudoMagnestismo.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoMagnestismo.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonIgnio.addEventListener('click', function () {

    if (conteudoIgnio.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoIgnio.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonGasoso.addEventListener('click', function () {

    if (conteudoGasoso.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoGasoso.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonCorrosivo.addEventListener('click', function () {

    if (conteudoCorrosivo.style.display === 'block') {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoCorrosivo.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoViral.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    }
});

buttonViral.addEventListener('click', function () {

    if (conteudoViral.style.display === 'block') {
        conteudoViral.style.display = 'none'
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoColisivo.style.display = 'none';
    } else {
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'block';
        conteudoColisivo.style.display = 'none';
    }
});

buttonColisivo.addEventListener('click', function () {

    if (conteudoColisivo.style.display === 'block') {
        conteudoColisivo.style.display = 'none';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none'
    } else {
        conteudoColisivo.style.display = 'block';
        conteudoToxina.style.display = 'none';
        conteudoGlacial.style.display = 'none';
        conteudoEletrico.style.display = 'none';
        conteudoRadiacao.style.display = 'none';
        conteudoMagnestismo.style.display = 'none';
        conteudoIgnio.style.display = 'none';
        conteudoGasoso.style.display = 'none';
        conteudoCorrosivo.style.display = 'none';
        conteudoViral.style.display = 'none'
    }
});
/* botoes do conteudo dano elemental termina*/
/* troca do conteudo central começa */
var buttonContDamage = document.querySelector("#btn-contDamage");
var buttonContArmasTK = document.querySelector("#btn-armasTK");
var buttonEfemerasTK = document.querySelector("#btn-efemerasTK");
var buttonProgenitores = document.querySelector("#btn-Progenitores");

var contDamage = document.querySelector("#contDamage");
var contArmasTK = document.querySelector("#contArmasTK");
var contEfemerasTK = document.querySelector("#contEfemerasTK");
var contProgenitores = document.querySelector("#contProgenitores");

buttonContDamage.addEventListener('click', function () {

    if (contDamage.style.display === 'block') {
        contDamage.style.display = 'none';
        contArmasTK.style.display = 'none';
        contEfemerasTK.style.display = 'none';
        contProgenitores.style.display = 'none';
    } else {
        contDamage.style.display = 'block';
        contArmasTK.style.display = 'none';
        contEfemerasTK.style.display = 'none';
        contProgenitores.style.display = 'none';
    }
});

buttonContArmasTK.addEventListener('click', function () {

    if (contArmasTK.style.display === 'block') {
        contArmasTK.style.display = 'none';
        contDamage.style.display = 'none';
        contEfemerasTK.style.display = 'none';
        contProgenitores.style.display = 'none';
    } else {
        contArmasTK.style.display = 'block';
        contDamage.style.display = 'none';
        contEfemerasTK.style.display = 'none';
        contProgenitores.style.display = 'none';
    }
});

buttonEfemerasTK.addEventListener('click', function () {

    if (contEfemerasTK.style.display === 'block') {
        contEfemerasTK.style.display = 'none';
        contArmasTK.style.display = 'none';
        contDamage.style.display = 'none';
        contProgenitores.style.display = 'none';
    } else {
        contEfemerasTK.style.display = 'block';
        contDamage.style.display = 'none';
        contArmasTK.style.display = 'none';
        contProgenitores.style.display = 'none';
    }
});

buttonProgenitores.addEventListener('click', function () {

    if (contProgenitores.style.display === 'block') {
        contProgenitores.style.display = 'none';
        contArmasTK.style.display = 'none';
        contDamage.style.display = 'none';
        contEfemerasTK.style.display = 'none';
    } else {
        contProgenitores.style.display = 'block';
        contDamage.style.display = 'none';
        contArmasTK.style.display = 'none';
        contEfemerasTK.style.display = 'none';
    }
});

/* armas tenet/kuva botoes  começa*/
var buttonArmasTenet = document.querySelector("#armasTenet");
var buttonArmasKuva = document.querySelector("#armasKuva");

var cconteudoArmaTenet = document.querySelector("#conteudoArmaTenet");
var cconteudoArmaKuva = document.querySelector("#conteudoArmaKuva");

buttonArmasTenet.addEventListener('click', function () {

    if (conteudoArmaTenet.style.display === 'block') {
        conteudoArmaTenet.style.display = 'none';
    } else {
        conteudoArmaTenet.style.display = 'block';
        cconteudoArmaKuva.style.display = 'none';
    }
});

buttonArmasKuva.addEventListener('click', function () {

    if (cconteudoArmaKuva.style.display === 'block') {
        conteudoArmaTenet.style.display = 'none';
    } else {
        cconteudoArmaKuva.style.display = 'block';
        cconteudoArmaTenet.style.display = 'none';
    }
});
/* armas tenet/kuva botoes  termina*/