"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronUp, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ProgressCard() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]">
      <div className="absolute right-2 top-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                    <span className="text-sm font-semibold text-white">M</span>
                  </div>
                  <h2 className="text-xl font-semibold">
                    Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
                  </h2>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Target: $45 million</div>
                <div className="text-sm font-medium">68% of target achieved</div>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <Progress value={68} className="h-2 bg-gray-100" />
              
              <div className="flex flex-wrap gap-4">
                {[
                  { color: "blue", label: "Won $15m" },
                  { color: "green", label: "Committed $5m" },
                  { color: "yellow", label: "Best case $7m" },
                  { color: "purple", label: "Qualified $5m" },
                  { color: "gray", label: "Leads $15m" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={cn(
                      "h-3 w-3 rounded-full",
                      {
                        "bg-blue-500": item.color === "blue",
                        "bg-green-500": item.color === "green",
                        "bg-yellow-500": item.color === "yellow",
                        "bg-purple-500": item.color === "purple",
                        "bg-gray-500": item.color === "gray",
                      }
                    )} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

