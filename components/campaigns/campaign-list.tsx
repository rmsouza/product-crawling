"use client";

import { campaigns } from "./data/campaigns";
import { CampaignCard } from "./campaign-card";

export function CampaignList() {
  const handleEdit = (id: number) => {
    console.log("Edit campaign:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete campaign:", id);
  };

  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}