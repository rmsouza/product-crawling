"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UrlInput } from "./url-input";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function UrlForm() {
  const router = useRouter();
  const [urls, setUrls] = useState<string[]>(Array(4).fill(""));

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleAddUrl = () => {
    setUrls([...urls, ""]);
  };

  const handleRemoveUrl = (index: number) => {
    const newUrls = urls.filter((_, i) => i !== index);
    setUrls(newUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted URLs:", urls);
    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {urls.map((url, index) => (
        <UrlInput
          key={index}
          id={`${index + 1}`}
          value={url}
          onChange={(value) => handleUrlChange(index, value)}
          onRemove={urls.length > 4 ? () => handleRemoveUrl(index) : undefined}
        />
      ))}
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handleAddUrl}
          className="flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          Add URL
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          Next
        </Button>
      </div>
    </form>
  );
}