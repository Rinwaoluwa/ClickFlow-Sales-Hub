"use client"

import { Clock } from "lucide-react"

const segments = [
  { label: "Won", amount: "18m", color: "bg-emerald-500" },
  { label: "Committed", amount: "8m", color: "bg-blue-500" },
  { label: "Best case", amount: "7m", color: "bg-purple-400" },
  { label: "Qualified", amount: "3m", color: "bg-amber-400" },
  { label: "Leads", amount: "75m", color: "bg-gray-200" },
]

export function ProgressBar() {
  const total = segments.reduce((acc, segment) => acc + parseInt(segment.amount), 0)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-xs text-gray-600">
        <div className="flex item-center">
          <Clock className="mr-2 h-4 w-4" />
          1 month until Q4 ends
        </div>
        <div className="flex justify-between text-xs gap-12">
          <span>Target: $45 million</span>
          <span>68% of target achieved</span>
        </div>
      </div>

      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className="flex h-full">
          <div className="bg-green-500 w-[24%]" />
          <div className="bg-blue-400 w-[11%]" />
          <div className="bg-purple-400 w-[9%]" />
          <div className="bg-orange-300 w-[4%]" />
          <div className="bg-gray-300 w-[52%]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2 text-xs text-gray-600">
            <div className={`h-3 w-3 rounded-full ${segment.color}`} />
            <span>{segment.label} ${segment.amount}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

