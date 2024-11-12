document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const minDistance = 150; // Aumenta la distancia mínima entre botones
    const positions = [];
    const secondHeaderHeight = document.getElementById('second-header').offsetHeight; // Altura del segundo header
    const horizontalMargin = 100; // Margen mínimo a la izquierda y derecha
    const verticalMargin = 150; // Margen mínimo en la parte inferior

    // Función para comprobar si la nueva posición se solapa con alguna existente
    function checkCollision(newTop, newLeft, buttonWidth, buttonHeight) {
        for (let pos of positions) {
            const distance = Math.sqrt(Math.pow(newTop - pos.top, 2) + Math.pow(newLeft - pos.left, 2));
            // Verifica si las cajas de los botones se tocan, considerando el tamaño del botón
            if (distance < minDistance + (buttonWidth / 2) + (buttonHeight / 2)) {
                return true; // Si la distancia es menor que la suma de los radios de los botones, hay colisión
            }
        }
        return false; // No hay colisión
    }

    // Función para colocar el botón en una posición aleatoria
    function placeButton(button) {
        let newTop, newLeft;
        let collision = true;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        while (collision) {
            // Generar posiciones aleatorias para el botón dentro de los límites
            newTop = Math.floor(Math.random() * (window.innerHeight - secondHeaderHeight - buttonHeight - 100 - verticalMargin)); // Ajustado para no sobrepasar el segundo header y el margen inferior
            newLeft = Math.floor(Math.random() * (window.innerWidth - buttonWidth - 2 * horizontalMargin)) + horizontalMargin; // Ajuste con el margen horizontal

            // Verificar si la nueva posición causa colisión con otros botones
            collision = checkCollision(newTop + secondHeaderHeight, newLeft, buttonWidth, buttonHeight); // Añadir la altura del segundo header
        }

        // Establecer la posición del botón
        button.style.top = `${newTop + secondHeaderHeight + 100}px`; // Ajustamos la posición para no sobrepasar el área del título
        button.style.left = `${newLeft}px`;

        // Registrar la posición del botón para futuras comprobaciones
        positions.push({ top: newTop + secondHeaderHeight + 100, left: newLeft });
    }

    // Colocamos los botones de manera aleatoria con un retraso
    buttons.forEach((button, index) => {
        // Llamamos a la función para colocar cada botón en una posición aleatoria
        placeButton(button);

        // Añadimos retraso progresivo para hacer la caída de los botones
        setTimeout(() => {
            button.classList.add("active");
        }, index * 200); // Ajusta el 200 para controlar el retraso entre botones
    });
});