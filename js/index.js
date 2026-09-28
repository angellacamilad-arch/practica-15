let edadcamila = 17;
let nombrecamila = "Camila";

if (edadcamila >= 18) {
    console.log(nombrecamila + " es mayor de edad.");
} else {
    console.log(nombrecamila + " es menor de edad.");
}

let numero1 = 10.5;
let numero2 = 5.2;
 if (numero1 > numero2) { 
    let resultado = numero1 + " es mayor que " + numero2;
    console.log(resultado);
} else {
    let resultado = numero2 + " es mayor que " + numero1;
    console.log(resultado);
}

let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Hoy es lunes.");
        break;
    case "martes":
        console.log("Hoy es martes.");
        break;
    case "miércoles":
        console.log("Hoy es miércoles.");
        break;
    case "jueves":
        console.log("Hoy es jueves.");
        break;
    case "viernes":
        console.log("Hoy es viernes.");
        break;
    default:
        console.log("No es un día válido.");
}

let mes = "enero";
switch (mes) {
    case "enero":
        console.log("es el primer mes del año.");
        break;
    case "febrero":
        console.log("es el segundo mes del año.");
        break;
    case "marzo":
        console.log("es el tercer mes del año.");
        break;
    case "abril":
        console.log("es el cuarto mes del año.");
        break;
    case "mayo":
        console.log("es el quinto mes del año.");
        break;
    case "junio":
        console.log("es el sexto mes del año.");
        break;
    default:
        console.log("No es un mes válido.");
}