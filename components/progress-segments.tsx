"use client"

import { Clock } from "lucide-react"

const segments = [
  { label: "Won", amount: "18m", color: "bg-green-500" },
  { label: "Committed", amount: "8m", color: "bg-blue-500" },
  { label: "Best case", amount: "7m", color: "bg-purple-500" },
  { label: "Qualified", amount: "3m", color: "bg-orange-500" },
  { label: "Leads", amount: "75m", color: "bg-gray-300" },
]

export function ProgressSegments() {
  const total = segments.reduce((acc, segment) => acc + parseInt(segment.amount), 0)
  
  return (
    <div className="space-y-4">
      <div className="flex items-center text-sm text-gray-600">
        <Clock className="w-4 h-4 mr-2" />
        1 month until Q4 ends
      </div>
      
      <div className="flex h-2 overflow-hidden rounded-full">
        {segments.map((segment, index) => {
          const width = (parseInt(segment.amount) / total) * 100
          return (
            <div
              key={segment.label}
              className={`${segment.color}`}
              style={{ width: `${width}%` }}
            />
          )
        })}
      </div>
      
      <div className="flex flex-wrap gap-4">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-2 text-sm">
            <div className={`w-3 h-3 rounded-full ${segment.color}`} />
            <span>{segment.label} ${segment.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

