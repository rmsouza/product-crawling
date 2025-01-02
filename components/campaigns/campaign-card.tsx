"use client";

import { Card } from "@/components/ui/card";
import { Campaign } from "./types";
import { format } from "date-fns";
import { CampaignActions } from "./campaign-actions";

interface CampaignCardProps {
  campaign: Campaign;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function CampaignCard({ campaign, onEdit, onDelete }: CampaignCardProps) {
  return (
    <Card className="p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-card/90 backdrop-blur">
      <img
        src={campaign.imageUrl}
        alt={campaign.name}
        className="w-full sm:w-16 h-32 sm:h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium text-lg sm:text-base">{campaign.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Created on {format(new Date(campaign.createdAt), "MMM d, yyyy")}
        </p>
      </div>
      <div className="w-full sm:w-auto flex justify-end">
        <CampaignActions
          id={campaign.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </Card>
  );
}