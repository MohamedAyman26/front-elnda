"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

export type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type WishlistContextType = {
  wishlistItems: WishlistItem[];

  addToWishlist: (
    item: WishlistItem
  ) => void;

  removeFromWishlist: (
    id: number
  ) => void;

  isInWishlist: (
    id: number
  ) => boolean;
};

const WishlistContext =
  createContext<WishlistContextType | null>(
    null
  );

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlistItems, setWishlistItems] =
    useState<WishlistItem[]>([]);

  const addToWishlist = (
    item: WishlistItem
  ) => {
    const exists = wishlistItems.find(
      (product) => product.id === item.id
    );

    if (!exists) {
      setWishlistItems((prev) => [
        ...prev,
        item,
      ]);
    }
  };

  const removeFromWishlist = (
    id: number
  ) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const isInWishlist = (
    id: number
  ) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}