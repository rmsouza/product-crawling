"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { UrlInputList } from "./url-input-list";
import { NameInput } from "./name-input";
import { CampaignFormData } from "./types";

export function CampaignForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<CampaignFormData>({
    name: "",
    urls: Array(4).fill("")
  });

  const handleNameChange = (name: string) => {
    setFormData(prev => ({ ...prev, name }));
  };

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...formData.urls];
    newUrls[index] = value;
    setFormData(prev => ({ ...prev, urls: newUrls }));
  };

  const handleAddUrl = () => {
    setFormData(prev => ({
      ...prev,
      urls: [...prev.urls, ""]
    }));
  };

  const handleRemoveUrl = (index: number) => {
    setFormData(prev => ({
      ...prev,
      urls: prev.urls.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
    router.push("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <NameInput 
        value={formData.name}
        onChange={handleNameChange}
      />
      <UrlInputList
        urls={formData.urls}
        onUrlChange={handleUrlChange}
        onRemoveUrl={handleRemoveUrl}
      />
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
        <Button 
          type="submit" 
          className="bg-primary hover:bg-primary/90"
          disabled={!formData.name.trim()}
        >
          Next
        </Button>
      </div>
    </form>
  );
}