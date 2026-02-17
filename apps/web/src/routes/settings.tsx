import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Settings | better-t-stack" },
    { name: "description", content: "Manage app settings" },
  ];
}

export default function SettingsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-3 text-muted-foreground">
        Add profile, preferences, and notification controls here as the next step.
      </p>
    </main>
  );
}
