import { CampaignForm } from "@/components/campaign/campaign-form";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Campaign</h1>
      <CampaignForm />
    </main>
  );
}