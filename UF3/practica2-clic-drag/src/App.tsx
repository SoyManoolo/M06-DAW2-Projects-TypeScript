import "./App.css";
import BtnComponent from "./components/BtnComponent";
import ImgComponent from "./components/ImgComponent";
import { useState } from "react";

function App() {
    // Estado para la matriz de celdas
    const [matrix, setMatrix] = useState(
        Array(5).fill(null).map(() => Array(5).fill(null))
    );

    // Botón para generar la imagen en una posición aleatoria
    const btnClick = () => {
        setMatrix(prevMatrix => {
            // Encontrar celdas vacias recorriendo la matriz
            const availablePositions: [number, number][] = prevMatrix.flatMap((row, rowIndex) =>
                // Guardar las posiciones de las celdas vacias
                row.map((cell, colIndex) => cell === null ? [rowIndex, colIndex] : null)
            // Elimina los valores nulos
            ).filter(Boolean) as [number, number][];

            // return si no hay celdas vacias
            if (!availablePositions.length) return prevMatrix;

            // Escoger celda vacia de manera aleatoria
            const [x, y]: [number, number] = availablePositions[Math.floor(Math.random() * availablePositions.length)];

            // Crear una copia profunda de la matriz anterior
            const newMatrix = prevMatrix.map(row => [...row]);

            // Colocar "basic" en la posición aleatoria seleccionada
            newMatrix[x][y] = "basic";

            // Devolver la nueva matriz
            return newMatrix;
        });
    };

    // Función para manejar la acción de soltar
    const handleDrop = (from: { row: number; col: number }, to: { row: number; col: number }) => {
        // No juntar si se arrastra a la misma posición
        if (from.row === to.row && from.col === to.col) return;

        setMatrix(prevMatrix => {
            const type: string = prevMatrix[from.row][from.col];
            const toType: string = prevMatrix[to.row][to.col];

            // Salir de la función si no hay tipo o no coinciden
            if (!type || !toType || type !== toType) return prevMatrix;

            // Progresión de nivel
            const levels: string[] = ["basic", "level1", "level2", "level3", "level4"];
            // Encontrar el índice del tipo actual
            const currentIndex: number = levels.indexOf(type);
            // Si el indice es por lo menos 0 y no es el último nivel, avanzar al siguiente
            const nextType: string | null = currentIndex >= 0 && currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;

            // Salir de la función si no hay siguiente tipo
            if (!nextType) return prevMatrix;

            // Crear nueva matriz
            return prevMatrix.map((row, i) =>
                row.map((cell, j) => {
                    // Reemplazar la celda de destino con el siguiente tipo
                    if (i === to.row && j === to.col) return nextType;
                    // Limpiar la celda de origen
                    if (i === from.row && j === from.col) return null;
                    return cell;
                })
            );
        });
    };

    // Representar el botón en la posición fija [2][2]
    matrix[2][2] = "button";

    return (
        // Contenedor principal
        <div className="flex flex-col items-center">
            {/* Cabecera del juego */}
            <header className="mb-10"><h1>Juego de click and drag</h1></header>
            {/* Cuadrícula 5x5 */}
            <div className="grid grid-cols-5 gap-2">
                {matrix.flat().map((item, index) => {
                    const row = Math.floor(index / 5), col = index % 5;
                    return (
                        // Celda individual con eventos para drag and drop
                        <div key={index} className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-xs"
                            draggable={!!item && item !== "button"} onDragOver={(e) => e.preventDefault()}
                            onDragStart={(e) => e.dataTransfer.setData("from", JSON.stringify({ row, col }))}
                            onDrop={(e) => handleDrop(JSON.parse(e.dataTransfer.getData("from")), { row, col })}>
                            {/* Renderiza según sea: botón especial, imagen según tipo, o celda vacía */}
                            {item === "button" ? <BtnComponent clickEffect={btnClick} /> :
                                item ? <ImgComponent type={item} /> : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;