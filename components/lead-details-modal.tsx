"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Edit, Search, Mail, SendHorizonal } from 'lucide-react'
import { Linkedin } from "@/assets/svgs/linkedin"
import { Gemini } from "@/assets/svgs/gemini"
import { ActionButtons } from "./action-buttons"
import { LeadInsights } from "./lead-insights"

interface LeadDetailsModalProps {
  lead: {
    name: string
    role: string
    company: string
    description: string
    avatar: string
    link: string;
  }
  isOpen: boolean
  onClose: () => void
}

export function LeadDetailsModal({ lead, isOpen, onClose }: LeadDetailsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/10 flex items-start justify-center overflow-y-auto py-4 px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="relative w-full max-w-2xl mt-16"
          >

            <div className="relative top-[-50] p-[3px] rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-purple-400">
              <Card className="relative overflow-hidden bg-white rounded-xl">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 mb-4">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <p className="text-base sm:text-lg font-semibold truncate">
                        Engage with {lead.name}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="self-end"
                      onClick={onClose}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 p-3 border rounded-md shadow-md">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={lead.avatar} />
                      <AvatarFallback>{lead.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold truncate">{lead.name}</div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <Link href={lead.link} target="_blank" className="flex-shrink-0">
                          <Linkedin height="20px" width="20px" />
                        </Link>
                        <div className="flex items-center gap-1 min-w-0">
                          <span className="truncate">{lead.role}</span>
                          <span>•</span>
                          <span className="truncate">{lead.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-purple-50 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        <Gemini height="16px" width="16px" />
                        <p className="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-400 bg-clip-text text-transparent text-sm">
                          {lead.name} may be interested in chatting
                        </p>
                      </div>
                      <ActionButtons className="w-full sm:w-auto" />
                    </div>

                    <LeadInsights
                      name="Jane"
                      company="Northwind Traders"
                      revenue="200M"
                    />

                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                      <h4 className="text-sm font-semibold text-gray-800">About {lead.name}</h4>
                      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                        {lead.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

