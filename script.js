function sum() {
    let a = Number(document.getElementById('aNumber').value);
    let b = Number(document.getElementById('bNumber').value);

    let c = a + b;
    document.getElementById('result').innerText = c;
}

function matriz(n) {
    let resultado = ""; // Cadena para construir la matriz
    let mitad = (n % 2 === 0) ? n / 2 : (n - 1) / 2; // Define la mitad de la matriz (entera)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let nivel = 0;

            // Determinar el nivel basado en la distancia a los bordes
            for (let k = 0; k <= mitad; k++) {
                if (i === k || j === k || i === n - k - 1 || j === n - k - 1) {
                    nivel = k + 1; // Nivel actual basado en la distancia
                    break; // Sale del bucle al encontrar el nivel
                }
            }

            resultado += nivel + " "; // Construye la fila
        }
        resultado += "<br>"; // Salto de línea para cada fila
    }

    // Mostrar la matriz en el elemento resultMatriz
    document.getElementById('resultMatriz').innerHTML = resultado;
}

function matriz2(n) {
    let resultado = ""; // Cadena para construir la matriz
    let matriz = Array.from({ length: n }, () => Array(n).fill(0)); // Matriz inicial vacía

    let valor = 1;
    let inicioFila = 0, finFila = n - 1;
    let inicioCol = 0, finCol = n - 1;

    while (inicioFila <= finFila && inicioCol <= finCol) {
        // Llenar la fila superior
        for (let j = inicioCol; j <= finCol; j++) {
            matriz[inicioFila][j] = valor++;
        }
        inicioFila++;

        // Llenar la columna derecha
        for (let i = inicioFila; i <= finFila; i++) {
            matriz[i][finCol] = valor++;
        }
        finCol--;

        // Llenar la fila inferior
        for (let j = finCol; j >= inicioCol; j--) {
            matriz[finFila][j] = valor++;
        }
        finFila--;

        // Llenar la columna izquierda
        for (let i = finFila; i >= inicioFila; i--) {
            matriz[i][inicioCol] = valor++;
        }
        inicioCol++;
    }

    // Construir la matriz como cadena HTML
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            resultado += matriz[i][j] + " ";
        }
        resultado += "<br>";
    }

    // Mostrar la matriz en el elemento resultMatriz2
    document.getElementById('resultMatriz2').innerHTML = resultado;
}