"use client"

import { EmptyState } from "@/components/empty-state"

export default function RecentPage() {
  return (
    <EmptyState
      title="No recent items"
      description="You haven't accessed any items recently. Items you view will appear here."
      illustration="inbox"
    />
  )
}

