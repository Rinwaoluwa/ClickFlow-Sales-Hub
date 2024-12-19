"use client"

import { DashboardNav } from "@/components/dashboard-nav"
import { TopNav } from "@/components/top-nav"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex bg-sidebar h-screen overflow-hidden">
        <DashboardNav />
        <div className="flex-1 flex flex-col overflow-hidden p-4">
          <TopNav />
          <main className="flex-1 overflow-auto scrollbar-hide">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

