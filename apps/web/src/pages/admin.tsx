import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Admin | better-t-stack" },
    { name: "description", content: "Admin dashboard" },
  ];
}

export default function AdminPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <p className="mt-3 text-muted-foreground">
        This page is only accessible for users with the admin role.
      </p>
    </main>
  );
}
