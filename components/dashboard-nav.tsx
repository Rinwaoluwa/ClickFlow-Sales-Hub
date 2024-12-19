"use client"

import { cn } from "@/lib/utils"
import { BarChart, Home, Clock, Pin, Briefcase, Users, FileText, ShoppingCart, FileSpreadsheet, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Recent", href: "/dashboard/recent", icon: Clock },
  { name: "Pinned", href: "/dashboard/pinned", icon: Pin },
  { name: "My Work", href: "/dashboard/my-work", icon: Briefcase, 
    submenu: [
      { name: "Sales accelerator", href: "/dashboard/my-work/sales" },
      { name: "Dashboards", href: "/dashboard/my-work/dashboards" },
      { name: "Activities", href: "/dashboard/my-work/activities" },
    ]
  },
  { name: "Customers", href: "/dashboard/customers", icon: Users,
    submenu: [
      { name: "Accounts", href: "/dashboard/customers/accounts" },
      { name: "Contacts", href: "/dashboard/customers/contacts" },
    ]
  },
  { name: "Sales", href: "/dashboard/sales", icon: ShoppingCart,
    submenu: [
      { name: "Leads", href: "/dashboard/sales/leads" },
      { name: "Opportunities", href: "/dashboard/sales/opportunities" },
      { name: "Competitors", href: "/dashboard/sales/competitors" },
    ]
  },
  { name: "Marketing", href: "/dashboard/marketing", icon: BarChart },
  { name: "Agent Skills", href: "/dashboard/agent-skills", icon: FileSpreadsheet },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarTrigger />
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      "relative",
                      pathname === item.href && "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600"
                    )}
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <SidebarMenuButton
                          key={subItem.name}
                          asChild
                          isActive={pathname === subItem.href}
                          size="sm"
                          className={cn(
                            "relative",
                            pathname === subItem.href && "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-600"
                          )}
                        >
                          <Link href={subItem.href}>
                            <span>{subItem.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

