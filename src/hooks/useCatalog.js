import { useEffect, useState } from "react";
import { STORAGE_KEY, seedProducts } from "@/lib/constants";

export function useCatalog() {
  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : seedProducts;
    } catch {
      return seedProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  return { products, setProducts };
}
