"use client"

import { useState } from "react"
import { LeadCard } from "./lead-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence } from "framer-motion"

const leads = [
  {
    name: "Jane Reyes",
    role: "COO",
    company: "Northwind Traders",
    action: "Engage with Jane Reyes",
    description: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    tags: ["Expand business", "High buying intent"],
    avatar: "",
  },
  {
    name: "Allan Munger",
    role: "Head of Real Estate Development",
    company: "Contoso Coffee",
    action: "Prepare for meeting with Allan",
    description: "Prepare for high-buying intent meeting Copilot scheduled 2 PM regarding upgrading service contract.",
    tags: ["Upcoming meeting", "Due today"],
    avatar: "",
  },
]

export function LeadsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leads.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leads.length) % leads.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative flex min-h-[300px] items-stretch gap-4">
          <AnimatePresence mode="wait">
            {leads.map((lead, idx) => (
              idx === currentIndex && (
                <div key={lead.name} className="w-full">
                  <LeadCard lead={lead} />
                </div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-1">
          {leads.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-6 bg-blue-600"
                  : "w-1.5 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

