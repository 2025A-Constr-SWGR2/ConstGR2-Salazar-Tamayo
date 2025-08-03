exports.division = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUnoCasteado) || isNaN(numeroDosCasteado)) {
        throw new Error('No son numeros validos')
    }
    if (numeroDosCasteado === 0) {
        throw new Error('No se puede dividir por cero')
    }
    return numeroUnoCasteado / numeroDosCasteado;
} 