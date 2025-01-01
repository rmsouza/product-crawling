"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhotoGallery } from "./photo-gallery";
import { VideoGallery } from "./video-gallery";

export function MediaGallery() {
  return (
    <Tabs defaultValue="photos" className="w-full">
      <TabsList className="grid w-full max-w-[400px] grid-cols-2 bg-card/50 backdrop-blur">
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
      </TabsList>
      <TabsContent value="photos" className="mt-6">
        <PhotoGallery />
      </TabsContent>
      <TabsContent value="videos" className="mt-6">
        <VideoGallery />
      </TabsContent>
    </Tabs>
  );
}