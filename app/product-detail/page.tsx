import { Suspense } from "react";
import { MediaGallery } from "@/components/media-gallery/media-gallery";
import { ProductInfo } from "@/components/product-detail/product-info";
import { CopyButton } from "@/components/product-detail/copy-button";

export default function ProductDetailPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">Headphones Tabajara</h1>
        <CopyButton text="Headphones Tabajara" label="Title" />
      </div>
      <ProductInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <MediaGallery />
      </Suspense>
    </main>
  );
}