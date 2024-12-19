"use client"

import { EmptyState } from "@/components/empty-state"

export default function ChartPage() {
  return (
    <EmptyState 
      title="No chart data available" 
      description="There is no chart data to display at this time. Try selecting different filters or time ranges."
    />
  )
}

