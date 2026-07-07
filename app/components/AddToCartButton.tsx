"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "./context/CartContext";

type AddToCartButtonProps = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="
      w-full
      flex
      items-center
      justify-center
      gap-3
      rounded-full
      bg-[#163020]
      hover:bg-[#1f472d]
      text-white
      py-4
      font-semibold
      shadow-lg
      transition-all
      duration-300
      hover:scale-[1.02]
      "
    >
      <ShoppingCart size={20} />
      Add To Cart
    </button>
  );
}