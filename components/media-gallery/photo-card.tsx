"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Photo } from "./types";

interface PhotoCardProps {
  photo: Photo;
  onImageClick: () => void;
  onDownload: (url: string, title: string) => void;
}

export function PhotoCard({ photo, onImageClick, onDownload }: PhotoCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur">
      <div 
        className="relative aspect-square cursor-pointer"
        onClick={onImageClick}
      >
        <img
          src={photo.url}
          alt={photo.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <Button
          variant="default"
          size="sm"
          className="w-full bg-primary hover:bg-primary/90 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onDownload(photo.url, photo.title);
          }}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </Card>
  );
}