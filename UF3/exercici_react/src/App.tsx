import React, { useState } from "react";
import './App.css';

function App() {

  //Tipus propi per declarar un objecte Foto
  type Photo = {
    url: string;
    title: string;
  }

  //Fotos inicials, es poden afegir més
  const [photos, setPhotos] = useState<Photo[]>([
    { url: "/gats.jpg", title: "Foto 1" },
    { url: "/gossets.jpg", title: "Foto 2" },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Index de la foto actual

  // Control de inputs
  const [newUrl, setNewUrl] = useState<string>(""); // Per editar la URL
  const [newTitle, setNewTitle] = useState<string>(""); // Per editar el titol

  // Canviar a la següent o anterior foto
  const handleNext = () => {
    /* TODO, s'ha d'utilitzar setCurrentIndex */
  };

  const handlePrevious = () => {
    /* TODO, s'ha d'utilitzar setCurrentIndex */
  };

  // Actualizar la foto actual
  const handleUpdatePhoto = () => {
    /* TODO, s'ha d'utilitzar setPhotos */
  };

  return (
    <div>
      <div>
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].title}
        />
        <h3>{photos[currentIndex].title}</h3>
      </div>
      <div>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Següent</button>
      </div>
      <div>
        <h4>Modificar Foto Actual</h4>
        <input
          type="text"
          placeholder="Nova URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nou Títol"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleUpdatePhoto}>Actualitzar Foto</button>
      </div>
    </div>
  );
}

export default App;