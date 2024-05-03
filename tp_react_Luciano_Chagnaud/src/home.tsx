import { useState } from "react";
import "./slider.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="slider-container">
        <h2 className="text-center fw-bold">La Guitarra de Juancito</h2>
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                left: `${index * 100}%`,
                opacity: index === currentSlide ? 1 : 0,
              }}
            >
              <img src={image} alt={`Instrumento ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          {""}
        </button>
        <button className="next" onClick={nextSlide}>
          {""}
        </button>
      </div>
      <div className="descripcion-container">
        <p className="descripcion m-4">
          ¡Sumérgete en el mundo de la música con La Guitarra de Juanito! Aquí,
          la melodía y la armonía se fusionan para crear una experiencia única.
          Desde las vibraciones de una guitarra hasta el eco de un piano,
          nuestro universo musical te espera con los brazos abiertos. Encuentra
          tu inspiración entre una selección cuidadosamente curada de
          instrumentos, equipos de sonido y accesorios, donde la calidad y el
          servicio excepcional son nuestra nota distintiva. ¡Embárcate en un
          viaje sonoro inolvidable con La Guitarra de Juanito y deja que la
          música te lleve a lugares que nunca imaginaste!
        </p>
      </div>
    </>
  );
};

export default Home;
