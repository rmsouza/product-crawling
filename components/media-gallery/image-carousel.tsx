"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "./types";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

interface CarouselButtonProps {
  onClick: () => void;
  direction: "left" | "right";
  children: React.ReactNode;
}

function CarouselButton({ onClick, direction, children }: CarouselButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "absolute z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90",
        direction === "left" ? "left-4" : "right-4"
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function ImageCarousel({ photos, currentIndex, isOpen, onClose }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const handlePrevious = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? photos.length - 1 : current - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current === photos.length - 1 ? 0 : current + 1));
  }, [photos.length]);

  const currentPhoto = photos[activeIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
        <DialogTitle className="sr-only">
          {currentPhoto.title}
        </DialogTitle>
        <div className="relative flex items-center justify-center h-full">
          <CarouselButton onClick={handlePrevious} direction="left">
            <ChevronLeft className="h-4 w-4" />
          </CarouselButton>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={currentPhoto.url.replace("w=500", "w=1200")}
              alt={currentPhoto.title}
              className="object-contain max-w-full max-h-[95vh]"
            />
          </div>
          <CarouselButton onClick={handleNext} direction="right">
            <ChevronRight className="h-4 w-4" />
          </CarouselButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}