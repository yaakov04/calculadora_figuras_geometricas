//calcular el perimetro de un cuadrado
const perimetroCuadrado = lado => lado * 4;
//area de un cuadrado
const areaCuadrado = lado => lado * lado;
//perimetro de un triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
//area de un triangulo
const areaTriangulo = (altura, base) => (altura * base) / 2;
//perimetro/circunferenci de un circulo (2r*PI)
const perimetroCirculo = radio => (2 * radio) * Math.PI;
//Area circulo (pi*r^2)
const areaCirculo = radio => Math.PI * (radio * radio);