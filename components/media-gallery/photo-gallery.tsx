"use client";

import { useState } from "react";
import { PhotoCard } from "./photo-card";
import { ImageCarousel } from "./image-carousel";
import { photos } from "./data/photos";

export function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onImageClick={() => setSelectedPhotoIndex(index)}
            onDownload={handleDownload}
          />
        ))}
      </div>

      {selectedPhotoIndex !== null && (
        <ImageCarousel
          photos={photos}
          currentIndex={selectedPhotoIndex}
          isOpen={selectedPhotoIndex !== null}
          onClose={() => setSelectedPhotoIndex(null)}
        />
      )}
    </>
  );
}