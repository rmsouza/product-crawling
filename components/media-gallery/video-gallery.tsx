"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { videos } from "./data/videos";

export function VideoGallery() {
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur">
          <div className="relative aspect-video">
            <video
              src={video.url}
              poster={video.thumbnail}
              controls
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-3 text-lg">{video.title}</h3>
            <Button
              variant="default"
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 transition-colors"
              onClick={() => handleDownload(video.url, video.title)}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}