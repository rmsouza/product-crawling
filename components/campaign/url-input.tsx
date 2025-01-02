"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface UrlInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
}

export function UrlInput({ id, value, onChange, onRemove }: UrlInputProps) {
  return (
    <div className="flex gap-2 items-end">
      <div className="flex-1">
        <Label htmlFor={id}>Product {id}</Label>
        <Input
          id={id}
          type="url"
          placeholder="https://example.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {onRemove && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onRemove}
          className="h-9 w-9 text-destructive hover:text-destructive-foreground hover:bg-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}