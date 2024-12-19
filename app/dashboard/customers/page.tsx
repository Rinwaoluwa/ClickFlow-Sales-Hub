"use client"

import { EmptyState } from "@/components/empty-state"

export default function CustomersPage() {
  return (
    <EmptyState
      title="No customers found"
      description="Start adding customers to your CRM see them listed here."
      illustration="users"
      action={{
        label: "Add Customer",
        onClick: () => {}
      }}
    />
  )
}

