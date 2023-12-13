"use client";
import React, { FC } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 -mt-4 right-0 cursor-pointer text-white"
    onClick={onClick}
  >
    <span className="text-3xl">&rarr;</span>
  </div>
);

const PrevArrow: FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 -mt-4 left-0 cursor-pointer text-white"
    onClick={onClick}
  >
    <span className="text-3xl">&larr;</span>
  </div>
);

const images = [
  "/marrie.png",
  "/nina.png",
  "/ayllah.jpg",
  "/billy.jpg",
  "/bella.png",
  "/laila.jpg",
  "/bily.jpg",
  "/chloe.jpg",
  "/fada.jpg",
];

const Carrossel: FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className="font-nunito py-6 md:py-14 lg:py-24 px-4 md:px-6 lg:px-12">
      <h1 className="flex text-black text-left font-semibold text-2xl mb-6 ju">
        Siga nossas redes sociais @petschirmer
      </h1>

      <Slider {...settings} className="custom-slider">
        {images.map((image, index) => (
          <div key={index} className="custom-slide">
            <div
              className="rounded overflow-hidden border border-black"
              style={{
                width: "215px",
                height: "215px",
                position: "relative",
                borderRadius: "16px", // Adiciona bordas arredondadas
                marginRight: "10px", // Adiciona espaçamento à direita
              }}
            >
              <Image
                src={image}
                alt={`Foto ${index + 1}`}
                width={215}
                height={215}
                style={{ objectFit: "cover" }}
                className="rounded"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .custom-slider {
          margin: 0 -10px; /* Ajuste a margem negativa para controlar o espaçamento entre os slides */
        }

        .custom-slide {
          padding: 0 10px; /* Ajuste o preenchimento para controlar o espaçamento entre os slides */
        }
      `}</style>
    </section>
  );
};

export default Carrossel;
