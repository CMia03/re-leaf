"use client";
import { useState } from "react";

const ProductImages = () => {
  const images = [
    {
      link: "https://cache.magazine-avantages.fr/data/photo/w1000_ci/6t/les-meilleures-huiles-essentielles-huile-essentielle-top-10.jpg",
      alt: "Image 1",
    },
    {
      link: "https://i.pinimg.com/736x/3e/82/f9/3e82f92e87a03766fa1a1a6bdddb8a5a.jpg",
      alt: "Image 2",
    },
    {
      link: "https://wallpaper.forfun.com/fetch/5e/5e253421f43802e8712e703cbf0aa1e0.jpeg",
      alt: "Image 3",
    },
  ];
  const [selectedImage, setSelectedImage] = useState<{
    link: string;
    alt: string;
  }>(images[0]);
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4">
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.link}
            alt={image.alt}
            className="w-16 h-16 object-cover cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="relative w-full">
        <img
          alt={selectedImage.alt}
          src={selectedImage.link}
          onClick={() => window.open(selectedImage.link)}
        />
      </div>
    </div>
  );
};

export default ProductImages;
