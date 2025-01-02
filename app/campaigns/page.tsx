"use client";

import { CampaignList } from "@/components/campaigns/campaign-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CampaignsPage() {
  const router = useRouter();

  return (
    <main className="container mx-auto py-4 sm:py-8 px-3 sm:px-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:justify-between mb-6">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <Button 
          onClick={() => router.push("/campaign/new")} 
          className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>
      <CampaignList />
    </main>
  );
}