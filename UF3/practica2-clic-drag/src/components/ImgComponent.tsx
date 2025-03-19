function ImgComponent({ type }: { type: "basic" | "level1" | "level2" | "level3" | "level4" }) {
    // Rutas de las imagenes
    const imgSrc = {
        basic: "/basic.png",
        level1: "/level1.png",
        level2: "/level2.png",
        level3: "/level3.png",
        level4: "/level4.png"
    }[type];

    return (
        // Renderiza la imagen correspondiente
        <img src={imgSrc} alt={type} className="w-full h-full" />
    );
}

export default ImgComponent;