"use client"

import { Pencil, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ActionButtonsProps {
  onEdit?: () => void
  onApprove?: () => void
  className?: string
}

export function ActionButtons({ onEdit, onApprove, className }: ActionButtonsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={onEdit}
        className="bg-white text-gray-600 hover:bg-gray-50 text-xs"
      >
        <Pencil className="mr-1 h-2 w-2" />
        Edit
      </Button>
      <Button
        size="sm"
        onClick={onApprove}
        className="bg-indigo-600 text-white hover:bg-indigo-700 text-xs"
      >
        <Send className="mr-1 h-2 w-2" />
        Approve and send
      </Button>
    </div>
  )
}

