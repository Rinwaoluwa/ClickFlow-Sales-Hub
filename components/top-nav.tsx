"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Image, Plus, RefreshCw, Users, Trash2, MoreVertical, FileClock, ListFilter, LibraryBig, AlignJustify, Menu } from 'lucide-react'
import Link from "next/link"
import { SidebarTrigger } from "./ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

const TopNav = () => {
  const primaryActions = [
    { icon: Image, label: "Show chart" },
    { icon: AlignJustify, label: "Focused view", hasSidebar: true },
    { icon: Plus, label: "New" },
    { icon: RefreshCw, label: "Refresh", iconOnly: true },
    { icon: Users, label: "Collaborate" },
    { icon: Trash2, label: "Delete" },
  ]

  const secondaryActions = [
    { icon: FileClock, label: "Smart data" },
    { icon: ListFilter, label: "Edit filters" },
    { icon: LibraryBig, label: "Edit columns" },
  ]

  return (
    <div className="sticky top-0 z-10 flex h-12 items-center justify-between border bg-white px-2 sm:px-4 shadow-md rounded-sm mb-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-base font-medium">
          <span className="truncate max-w-[120px] sm:max-w-none">My open leads</span>
          <ChevronDown className="ml-1 h-4 w-4 text-gray-500 flex-shrink-0" />
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2 text-xs">
        {primaryActions.map((action, index) => (
          action.hasSidebar ? (
            <div className="flex items-center font-medium gap-2 relative w-full" key={index}>
              <AlignJustify className="h-4 w-4" />
              <div className="absolute z-10 opacity-0">
                <SidebarTrigger className="w-[140px]" />
              </div>
              {action.label}
            </div>
          ) : (
            <Button
              key={action.label}
              variant="ghost"
              size={action.iconOnly ? "icon" : "sm"}
              className={`flex items-center text-xs gap-2 ${index === primaryActions.length - 1 ? 'border-r pr-2' : ''}`}
            >
              <action.icon className="h-4 w-4" />
              {!action.iconOnly && action.label}
            </Button>
          )
        ))}

        <div className="flex items-center space-x-1">
          {secondaryActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border rounded-md text-xs"
            >
              <action.icon className="h-4 w-4" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Tablet Navigation (Medium Screens) */}
      <div className="hidden md:flex xl:hidden items-center space-x-2">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>

          {/* Primary Actions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Menu className="h-4 w-4" />
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <div className="relative">
                  {primaryActions.map((action) => (
                    !action.iconOnly && (
                      <DropdownMenuItem key={action.label}>
                        {action.hasSidebar && (
                          <div className="absolute z-10 flex items-center font-medium gap-2 w-full opacity-0" key={action.label}>
                            <SidebarTrigger className="w-[140px]" />
                          </div>
                        )}
                        <action.icon className="mr-2 h-4 w-4" />
                        {action.label}
                      </DropdownMenuItem>
                    )
                  ))}
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Secondary Actions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <MoreVertical className="h-4 w-4" />
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                {secondaryActions.map((action) => (
                  <DropdownMenuItem key={action.label}>
                    <action.icon className="mr-2 h-4 w-4" />
                    {action.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <RefreshCw className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuGroup>
              {primaryActions.map((action) => (
                !action.iconOnly && (
                  <div className="relative flex">
                    <DropdownMenuItem key={action.label}>
                      {action.hasSidebar && (
                        <div className="absolute z-10 flex items-center font-medium gap-2 w-full opacity-0" key={action.label}>
                          <SidebarTrigger className="w-[140px]" />
                        </div>
                      )}
                      <action.icon className="mr-2 h-4 w-4" />
                      {action.label}
                    </DropdownMenuItem>
                  </div>
                )
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Tools</DropdownMenuLabel>
            <DropdownMenuGroup>
              {secondaryActions.map((action) => (
                <DropdownMenuItem key={action.label}>
                  <action.icon className="mr-2 h-4 w-4" />
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export { TopNav }

