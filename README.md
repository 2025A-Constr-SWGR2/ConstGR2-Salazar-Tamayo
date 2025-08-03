# Proyecto de Librerías Matemáticas NPM

Este proyecto implementa las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) como librerías NPM separadas, siguiendo las mejores prácticas de desarrollo de módulos.

## Estructura del Proyecto

```
examen2/
├── 2025a-swgr2-vaes-suma/
│   ├── package.json
│   └── index.js
├── 2025a-swgr2-vaes-resta/
│   ├── package.json
│   └── index.js
├── 2025a-swgr2-vaes-multiplicacion/
│   ├── package.json
│   └── index.js
├── 2025a-swgr2-vaes-division/
│   ├── package.json
│   └── index.js
├── librerias-usadas/
│   ├── package.json
│   └── index.js
└── README.md
```

## Librerías Creadas

### 1. 2025a-swgr2-vaes-suma
- **Función**: `suma(numeroUno, numeroDos)`
- **Descripción**: Realiza la suma de dos números
- **Validación**: Verifica que ambos parámetros sean números válidos

### 2. 2025a-swgr2-vaes-resta
- **Función**: `resta(numeroUno, numeroDos)`
- **Descripción**: Realiza la resta de dos números
- **Validación**: Verifica que ambos parámetros sean números válidos

### 3. 2025a-swgr2-vaes-multiplicacion
- **Función**: `multiplicacion(numeroUno, numeroDos)`
- **Descripción**: Realiza la multiplicación de dos números
- **Validación**: Verifica que ambos parámetros sean números válidos

### 4. 2025a-swgr2-vaes-division
- **Función**: `division(numeroUno, numeroDos)`
- **Descripción**: Realiza la división de dos números
- **Validación**: Verifica que ambos parámetros sean números válidos y que el divisor no sea cero

## Instalación y Uso

### 1. Publicar módulos localmente
```bash
# En cada carpeta de librería
npm link
```

### 2. Instalar módulos en el proyecto de uso
```bash
cd librerias-usadas
npm link 2025a-swgr2-vaes-suma
npm link 2025a-swgr2-vaes-resta
npm link 2025a-swgr2-vaes-multiplicacion
npm link 2025a-swgr2-vaes-division
```

### 3. Usar las librerías
```javascript
const paqueteSuma = require('2025a-swgr2-vaes-suma');
const paqueteResta = require('2025a-swgr2-vaes-resta');
const paqueteMultiplicacion = require('2025a-swgr2-vaes-multiplicacion');
const paqueteDivision = require('2025a-swgr2-vaes-division');

// Ejemplos de uso
console.log(paqueteSuma.suma(2, 1));        // 3
console.log(paqueteResta.resta(3, 2));      // 1
console.log(paqueteMultiplicacion.multiplicacion(2, 5)); // 10
console.log(paqueteDivision.division(9, 3)); // 3
```

## Pruebas Ejecutadas

El proyecto incluye pruebas que verifican:

1. **Operaciones básicas**:
   - `suma(2, 1)` → 3
   - `resta(3, 2)` → 1
   - `multiplicacion(2, 5)` → 10
   - `division(9, 3)` → 3

2. **Manejo de errores**:
   - División por cero
   - Parámetros no numéricos

## Características Técnicas

- **Validación de entrada**: Todas las funciones validan que los parámetros sean números válidos
- **Manejo de errores**: Lanzan errores descriptivos para casos inválidos
- **Modularidad**: Cada operación está en su propio módulo NPM
- **Reutilización**: Los módulos pueden ser utilizados en cualquier proyecto Node.js

## Autor

Vicente Adrian Eguez Sarzosa

## Licencia

ISC 