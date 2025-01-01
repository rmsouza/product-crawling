"use client";

import { Card } from "@/components/ui/card";
import { Product } from "./types";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-detail`);
  };

  return (
    <Card 
      className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-square">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-muted-foreground mt-1">${product.price}</p>
      </div>
    </Card>
  );
}