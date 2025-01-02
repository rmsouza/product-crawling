"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <div className="w-full">
      <Label htmlFor="campaign-name">Campaign Name</Label>
      <Input
        id="campaign-name"
        type="text"
        placeholder="Enter campaign name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}