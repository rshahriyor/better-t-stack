import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "About | better-t-stack" },
    { name: "description", content: "About this better-t-stack app" },
  ];
}

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-3 text-muted-foreground">
        This project uses React Router file-based routes, Tailwind CSS, and shared package utilities.
      </p>
    </main>
  );
}
