import { useState } from "react";
import ProductCard from "./productCard";
import BgImage3 from "../../../../public/images/Bg-image3.png";
import BgImage2 from "../../../../public/images/Bg-image2.png";
import { StaticImageData } from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  isFavorite: boolean;
};

const PRODUCT_MOCK: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: BgImage3,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: BgImage2,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: BgImage3,
    isFavorite: true,
  },
];

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCT_MOCK);

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
