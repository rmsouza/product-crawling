import { UrlForm } from "@/components/url-form/url-form";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Products URL</h1>
      <UrlForm />
    </main>
  );
}