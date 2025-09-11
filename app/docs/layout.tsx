"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsSidebar } from "../../components/docs-sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
