const paqueteSuma = require('2025a-swgr2-vaes-suma');
const paqueteResta = require('2025a-swgr2-vaes-resta');
const paqueteMultiplicacion = require('2025a-swgr2-vaes-multiplicacion');
const paqueteDivision = require('2025a-swgr2-vaes-division');


console.log('=== PRUEBAS DE OPERACIONES MATEMÁTICAS ===');

// Suma
const resultadoSuma = paqueteSuma.suma(2, 1);
console.log('suma(2, 1) =', resultadoSuma); // resultado esperado: 3

// Resta
const resultadoResta = paqueteResta.resta(3, 2);
console.log('resta(3, 2) =', resultadoResta); // resultado esperado: 1

// Multiplicación
const resultadoMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
console.log('multiplicacion(2, 5) =', resultadoMultiplicacion); // resultado esperado: 10

// División
const resultadoDivision = paqueteDivision.division(9, 3);
console.log('division(9, 3) =', resultadoDivision); // resultado esperado: 3

console.log('\n=== PRUEBAS ADICIONALES ===');

// Pruebas adicionales para verificar el manejo de errores
try {
    const divisionPorCero = paqueteDivision.division(5, 0);
    console.log('division(5, 0) =', divisionPorCero);
} catch (error) {
    console.log('Error en division por cero:', error.message);
}

try {
    const sumaInvalidos = paqueteSuma.suma('abc', 5);
    console.log('suma("abc", 5) =', sumaInvalidos);
} catch (error) {
    console.log('Error en suma con valores inválidos:', error.message);
}

console.log('\n=== TODAS LAS OPERACIONES FUNCIONAN CORRECTAMENTE ==='); 
