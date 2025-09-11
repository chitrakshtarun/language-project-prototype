"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Code, FileText, Play, Settings, Zap, Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Getting Started",
    icon: Home,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Language Guide",
    icon: BookOpen,
    items: [
      { title: "Syntax Overview", href: "/docs/syntax" },
      { title: "Variables", href: "/docs/variables" },
      { title: "Operations", href: "/docs/operations" },
      { title: "Conditionals", href: "/docs/conditionals" },
      { title: "Loops", href: "/docs/loops" },
    ],
  },
  {
    title: "Examples",
    icon: Code,
    items: [
      { title: "Basic Examples", href: "/docs/examples/basic" },
      { title: "Conditionals", href: "/docs/examples/conditionals" },
      { title: "Loops", href: "/docs/examples/loops" },
    ],
  },
  {
    title: "API Reference",
    icon: FileText,
    items: [
      { title: "Parser", href: "/docs/api/parser" },
      { title: "Interpreter", href: "/docs/api/interpreter" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <Link href="/docs" className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Language Docs</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarMenu className="p-2">
            {navigation.map((section) => (
              <SidebarMenuItem key={section.title}>
                <div className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground">
                  <section.icon className="mr-2 h-4 w-4" />
                  {section.title}
                </div>
                <SidebarMenuSub>
                  {section.items.map((item) => (
                    <SidebarMenuSubItem key={item.href}>
                      <SidebarMenuSubButton asChild isActive={pathname === item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                            pathname === item.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          <ChevronRight className="mr-2 h-3 w-3" />
                          {item.title}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
