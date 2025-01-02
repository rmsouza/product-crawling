"use client";

import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

interface CampaignActionsProps {
  id: number;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export function CampaignActions({ id, onEdit, onDelete }: CampaignActionsProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onEdit(id)}
        className="h-8 w-8"
      >
        <Edit2 className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onDelete(id)}
        className="h-8 w-8 text-destructive hover:text-destructive-foreground hover:bg-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}