"use client"

import { Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ContactCardProps {
  contact: {
    name: string
    role: string
    department: string
    email: string
    location: string
    avatar: string | any
    status: "available" | "busy" | "away"
    workHours: string
  }
}

export function ContactCardSkeleton() {
  return (
    <Card className="w-[400px] p-6 space-y-4">
      <div className="flex gap-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </Card>
  )
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <Card className="w-[400px] p-6">
      <div className="flex items-start gap-4">
        <div className="relative">
          <Avatar className="h-10 w-10">
            <AvatarImage src={contact.avatar} alt={contact.name} /> :
            <AvatarFallback>{contact.name[0]}</AvatarFallback>

          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
        </div>
        <div>
          <h3 className="font-semibold">{contact.name}</h3>
          <p className="text-sm text-gray-600">{contact.role}</p>
          <p className="text-sm text-gray-600">{contact.department}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="flex h-2 w-2 rounded-full bg-green-500" />
          <span>Available • Free all day</span>
        </div>
        <div className="mt-1 text-sm text-gray-600">
          Work hours: {contact.workHours}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-gray-500" />
          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
            {contact.email}
          </a>
        </div>
      </div>
    </Card>
  )
}

