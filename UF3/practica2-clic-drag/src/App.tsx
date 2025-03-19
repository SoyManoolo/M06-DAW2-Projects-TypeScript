import "./App.css";
import BtnComponent from "./components/BtnComponent";
import ImgComponent from "./components/ImgComponent";
import { useState } from "react";

function App() {
  const [matrix, setMatrix] = useState(
    Array(5).fill(null).map(() => Array(5).fill(null))
  );

  // Botón para generar la imagen en una posición aleatoria
  const btnClick = () => {
    setMatrix(prevMatrix => {
      // Encontrar celdas vacias
      const availablePositions = prevMatrix.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => cell === null ? [rowIndex, colIndex] : null)
      ).filter(Boolean) as [number, number][];

      if (!availablePositions.length) return prevMatrix;

      // Escoger celda vacia de manera aleatoria
      const [x, y] = availablePositions[Math.floor(Math.random() * availablePositions.length)];
      return prevMatrix.map((row, i) =>
        i === x ? row.map((cell, j) => j === y ? "basic" : cell) : [...row]
      );
    });
  };

  // Función para manejar la acción de soltar
  const handleDrop = (from: { row: number; col: number }, to: { row: number; col: number }) => {
    // No juntar si se arrastra a la misma posición
    if (from.row === to.row && from.col === to.col) return;

    setMatrix(prevMatrix => {
      const fromType = prevMatrix[from.row][from.col];
      const toType = prevMatrix[to.row][to.col];

      // Salir de la función si los types no coinciden
      if (!fromType || !toType || fromType !== toType) return prevMatrix;

      // Progresión de nivel
      const levels = ["basic", "level1", "level2", "level3", "level4"];
      const currentIndex = levels.indexOf(fromType);
      const nextType = currentIndex >= 0 && currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;

      if (!nextType) return prevMatrix;

      // Crear nueva matriz con valores actualizados
      return prevMatrix.map((row, i) =>
        row.map((cell, j) => {
          if (i === to.row && j === to.col) return nextType;
          if (i === from.row && j === from.col) return null;
          return cell;
        })
      );
    });
  };

  // Representar el botón en la posición fija [2][2]
  matrix[2][2] = "button";

  return (
    <div className="flex flex-col items-center">
      <header className="mb-10"><h1>Juego de click and drag</h1></header>
      <div className="grid grid-cols-5 gap-2">
        {matrix.flat().map((item, index) => {
          const row = Math.floor(index / 5), col = index % 5;
          return (
            <div key={index} className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-xs"
                 draggable={!!item && item !== "button"} onDragOver={(e) => e.preventDefault()}
                 onDragStart={(e) => e.dataTransfer.setData("from", JSON.stringify({ row, col }))}
                 onDrop={(e) => handleDrop(JSON.parse(e.dataTransfer.getData("from")), { row, col })}>
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