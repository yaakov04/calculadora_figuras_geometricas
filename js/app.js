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
}