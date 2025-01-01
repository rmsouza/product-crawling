"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <Label htmlFor={id}>URL {id}</Label>
        <Input
          id={id}
          type="url"
          placeholder="https://example.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="text-destructive hover:text-destructive/80 px-2 py-2"
        >
          Remove
        </button>
      )}
    </div>
  );
}