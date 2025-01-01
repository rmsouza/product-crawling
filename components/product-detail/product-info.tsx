"use client";

import { Card } from "@/components/ui/card";
import { CopyButton } from "./copy-button";
import { transformToAffiliateUrl } from "@/lib/affiliate";
import { useMemo } from "react";
import { PRODUCT_INFO } from "./data/product";

interface InfoSectionProps {
  title: string;
  content: string;
  copyLabel: string;
  isLink?: boolean;
}

function InfoSection({ title, content, copyLabel, isLink }: InfoSectionProps) {
  const affiliateLink = useMemo(() => 
    isLink ? transformToAffiliateUrl(content) : content,
    [content, isLink]
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <CopyButton text={isLink ? affiliateLink : content} label={copyLabel} />
      </div>
      {isLink ? (
        <p className="text-muted-foreground break-all">
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {affiliateLink}
          </a>
        </p>
      ) : (
        <p className="text-muted-foreground">{content}</p>
      )}
    </div>
  );
}

export function ProductInfo() {
  return (
    <Card className="p-6 mb-8 bg-card/90 backdrop-blur">
      <div className="space-y-6">
        <InfoSection
          title="Short Description"
          content={PRODUCT_INFO.shortDescription}
          copyLabel="Short Description"
        />
        <InfoSection
          title="Long Description"
          content={PRODUCT_INFO.longDescription}
          copyLabel="Long Description"
        />
        <InfoSection
          title="Price"
          content={PRODUCT_INFO.price}
          copyLabel="Price"
        />
        <InfoSection
          title="Product Link"
          content={PRODUCT_INFO.productLink}
          copyLabel="Product Link"
          isLink
        />
      </div>
    </Card>
  );
}