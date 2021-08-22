//calcular el perimetro de un cuadrado
const perimetroCuadrado = lado => lado * 4;
//area de un cuadrado
const areaCuadrado = lado => lado ** 2;
//perimetro de un triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
//area de un triangulo
const areaTriangulo = (altura, base) => (altura * base) / 2;
//perimetro/circunferenci de un circulo (2r*PI)
const perimetroCirculo = radio => (2 * radio) * Math.PI;
//Area circulo (pi*r^2)
const areaCirculo = radio => Math.PI * (radio ** 2);
//altura de un triangulo isoceles
const alturaTrianguloIsoceles = (lado1, lado2, base) => {
    if (lado1 == lado2) {
        return Math.sqrt(lado1 ** 2 - (base ** 2 / 4));
    } else {
        return 'No es un triangulo isoceles'
    }
};
///Menu Movil
const menuMovil = document.querySelector('.menu_movil_contenedor');
const btnMenuMovil = document.querySelector('.icono_menu_movil');
const openMenuMovil = () => menuMovil.classList.toggle('menu_movil_open');
const ocultarMenu = (e) => {
    if (e.target.getAttribute('data-icono-menu') == 'true' || e.target.className == 'fas fa-bars') {
        return;
    } else {
        menuMovil.classList.remove('menu_movil_open')
    }
};
btnMenuMovil.addEventListener('click', openMenuMovil);
document.body.addEventListener('click', ocultarMenu);

//reset input y output
const resultado = document.querySelector('.resultado');
const inputs = document.querySelectorAll('input');
const reset = () => {
    resultado.innerHTML = '-----';
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
};
reset();
//Mostrar-ocultar seccion
const menu = menuMovil.children[0];
const ocultar = (contenedorSeccion) => {
    for (let i = 0; i < contenedorSeccion.length; i++) {
        contenedorSeccion[i].classList.remove('mostrar');
    }
};
const mostrarSeccion = (e) => {
    e.preventDefault();
    if (e.target.getAttribute('data-accion') == 'mostrar_ocultar') {
        const seccion = document.querySelector(`#${e.target.getAttribute('data-seccion')}`);
        const contenedorSeccion = seccion.parentElement.children;
        ocultar(contenedorSeccion);
        seccion.classList.add('mostrar');
        reset();
    }
};
menu.addEventListener('click', mostrarSeccion);
//switch area-perimetro
const cambiarSwitch = (btnSwitch, contenedorForm) => {
    btnSwitch.classList.toggle('switch_perimetro');
    contenedorForm.children[0].classList.toggle('ocultar');
    contenedorForm.children[1].classList.toggle('ocultar');
    reset();
};
const switchCuadrado = document.querySelector('#switch_cuadrado');
const contendorFormCuadrado = document.querySelector('.formulario_cuadrado')
switchCuadrado.onclick = () => cambiarSwitch(switchCuadrado, contendorFormCuadrado);

const switchTriangulo = document.querySelector('#switch_triangulo');
const contendorFormTriangulo = document.querySelector('.formulario_triangulo')
switchTriangulo.onclick = () => cambiarSwitch(switchTriangulo, contendorFormTriangulo);

const switchCirculo = document.querySelector('#switch_circulo');
const contendorFormCirculo = document.querySelector('.formulario_circulo')
switchCirculo.onclick = () => cambiarSwitch(switchCirculo, contendorFormCirculo);

//calcular
const cuadrado = (tipoCalculo, valores) => {
    if (tipoCalculo == 'perimetro') {
        return perimetroCuadrado(valores[0]);
    } else if (tipoCalculo == 'area') {
        return areaCuadrado(valores[0]);
    }
}
const triangulo = (tipoCalculo, valores) => {
    if (tipoCalculo == 'perimetro') {
        return perimetroTriangulo(valores[0], valores[1], valores[2]);
    } else if (tipoCalculo == 'area') {
        return areaTriangulo(valores[0], valores[1]);
    }
}
const circulo = (tipoCalculo, valores) => {
    if (tipoCalculo == 'perimetro') {
        return perimetroCirculo(valores[0]);
    } else if (tipoCalculo == 'area') {
        return areaCirculo(valores[0]);
    }
}
const valoresForm = btn => {
    let valores = [];
    const inputs = btn.parentElement.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        valores.push(parseFloat(inputs[i].value));
    }
    return valores;
};
const calcular = (btn, valores) => {
    switch (btn.getAttribute('data-figura')) {
        case 'cuadrado':
            return cuadrado(btn.getAttribute('data-tipo'), valores);
            break;
        case 'triangulo':
            return triangulo(btn.getAttribute('data-tipo'), valores);
            break;
        case 'circulo':
            return circulo(btn.getAttribute('data-tipo'), valores);
            break;
        default:
            break;
    }
};


const calculo = btn => {
    const calculo = calcular(btn, valoresForm(btn));
    resultado.innerHTML = calculo;
    window.location = '#resultado'
}
document.body.onclick = e => {
    if (e.target.getAttribute('data-boton') === 'calcular') {
        const btn = e.target;
        calculo(btn);
    }
};
const presionarEnter = (e) => {
    const btn = e.querySelector('button')
    event.key == 'Enter' ? calculo(btn) : '';
}