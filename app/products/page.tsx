import { Suspense } from "react";
import { ProductGallery } from "@/components/products/product-gallery";

export default function ProductsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGallery />
      </Suspense>
    </main>
  );
}