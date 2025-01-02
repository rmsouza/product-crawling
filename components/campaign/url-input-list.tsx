"use client";

import { UrlInput } from "./url-input";

interface UrlInputListProps {
  urls: string[];
  onUrlChange: (index: number, value: string) => void;
  onRemoveUrl: (index: number) => void;
}

export function UrlInputList({ urls, onUrlChange, onRemoveUrl }: UrlInputListProps) {
  return (
    <>
      {urls.map((url, index) => (
        <UrlInput
          key={index}
          id={`${index + 1}`}
          value={url}
          onChange={(value) => onUrlChange(index, value)}
          onRemove={urls.length > 4 ? () => onRemoveUrl(index) : undefined}
        />
      ))}
    </>
  );
}