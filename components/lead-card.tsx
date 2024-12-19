"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Plus } from "lucide-react"
import { ContactCard, ContactCardSkeleton } from "./contact-card"
import { LeadDetailsModal } from "./lead-details-modal"
import { InitialLeadsType } from "./leads-table"


interface LeadCardProps {
  lead: {
    name: string
    role: string
    company: string
    action: string
    description: string
    tags: string[]
    avatar: string
  }
}

export function LeadCard({ lead }: LeadCardProps) {
  const [selectedLead, setSelectedLead] = useState<any | null>(null)
  const [showContact, setShowContact] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false)
        setShowContact(true)
      }, 1000)
    }
    return () => clearTimeout(timeout)
  }, [isLoading])

  return (
    <div className="relative">
      <motion.div
        onClick={() => {
          setSelectedLead(lead)
        }}
      >
        <Card className={`cursor-pointer p-4 shadow-sm `}>
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={lead.avatar} alt={lead.name} />
                <AvatarFallback>{lead.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{lead.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {lead.role} • {lead.company}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 bg-purple-50 rounded-lg px-3 py-2">
            <p className="text-sm font-semibold">{lead.action}</p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{lead.description}</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {lead.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium text-gray-600"
              >
                {tag} •
              </span>
            ))}
          </div>
        </Card>
      </motion.div>

      <LeadDetailsModal
        lead={selectedLead!}
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
      />

    </div>
  )
}

