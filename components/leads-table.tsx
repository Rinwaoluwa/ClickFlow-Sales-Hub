"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search } from "lucide-react"
import peterOdejobiImage from "../assets/images/peterodejobi.jpg";
import { ContactCard, ContactCardSkeleton } from "./contact-card"


// '{ id: number; name: string; role: string; company: string; topic: string; status: string; createdOn: string; description: string; avatar: string; }

const initialLeads = [
  {
    id: 1,
    name: "Peter Odejobi",
    email: "peterodejobi9@gmail.com",
    role: "Frontend Engineer",
    company: "",
    topic: "Meet with Peter Odejobi",
    status: "Verified",
    createdOn: "4/02/2024 12:00 PM",
    description: "Drive impactful results by leveraging Peter's proven expertise in crafting cutting-edge solutions that elevate user experiences and business growth.",
    avatar: peterOdejobiImage.src,
  },
  {
    id: 2,
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "3/30/2024 7:45 AM",
    description: "",
    avatar: "",
  },
  {
    id: 3,
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "3/28/2024 3:30 PM",
    description: "",
    avatar: "",
  },
  {
    id: 4,
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdOn: "3/25/2024 11:05 AM",
    description: "",
    avatar: "",
  },
  {
    id: 5,
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdOn: "3/23/2024 4:50 PM",
    description: "",
    avatar: "",
  },
]

export function LeadsTable() {
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLead, setSelectedLead] = useState<typeof initialLeads[0] | null>(null)
  const [leads, setLeads] = useState(initialLeads)

  const [showContact, setShowContact] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // loading timer animation
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


  const toggleLeadSelection = (leadId: number) => {
    setSelectedLeads(prev =>
      prev.includes(leadId)
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    )
  }

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.topic.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4 bg-white shadow-xl pt-4 px-4">
      <div className="flex items-center space-x-2 w-[40%] p-[2.2px] rounded-lg bg-gradient-to-r from-purple-400 via-blue-200 to-purple-200">
        <Input
          placeholder="Sort, filter and search with Copilot"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 h-8 m-0 focus-visible:outline-none"
        />
      </div>
      <div className="relative rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedLeads.length === filteredLeads.length}
                  onCheckedChange={(checked) => {
                    setSelectedLeads(checked ? filteredLeads.map(lead => lead.id) : [])
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created on</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.map((lead) => (
              <TableRow
                key={lead.id}
                className="group transition-colors hover:bg-gray-50"
              >
                <TableCell className="cursor-pointer" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedLeads.includes(lead.id)}
                    onCheckedChange={() => toggleLeadSelection(lead.id)}
                  />
                </TableCell>
                <TableCell className="font-medium text-blue-500 cursor-pointer">
                  <motion.div
                    onMouseEnter={() => {
                      setIsLoading(true);
                      setSelectedLead(lead);
                    }}
                    onMouseLeave={() => {
                      setIsLoading(false)
                      setShowContact(false)
                    }}
                  >
                    {lead.name}
                  </motion.div>
                </TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.createdOn}</TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit lead</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 dark:text-red-900">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AnimatePresence>
          {(isLoading || showContact) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-48 top-14 ml-4 z-[999]"
            >
              {isLoading ? (
                <ContactCardSkeleton />
              ) : (
                <ContactCard
                  contact={{
                    name: selectedLead?.name ?? "",
                    role: selectedLead?.role ?? "",
                    department: "Development",
                    email: selectedLead?.email ?? `${selectedLead?.name.toLowerCase().replace("'", "'.'")}@company.com`,
                    location: "Lekki Office",
                    avatar: selectedLead?.avatar,
                    status: "busy",
                    workHours: "8:00 AM - 5:00 PM"
                  }}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export type InitialLeadsType = typeof initialLeads;