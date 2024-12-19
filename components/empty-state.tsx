"use client"

import { motion } from "framer-motion"
import { FileSearch, Inbox, Mails, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const illustrations = {
  default: FileSearch,
  inbox: Inbox,
  users: Users2,
  mail: Mails
}

type IllustrationType = keyof typeof illustrations

export function EmptyState({ 
  title = "No items found", 
  description = "Try adjusting your search or filters to find what you're looking for.",
  illustration = "default" as IllustrationType,
  action
}: {
  title?: string
  description?: string
  illustration?: IllustrationType
  action?: {
    label: string
    onClick: () => void
  }
}) {
  const Icon = illustrations[illustration]

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto p-8"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-16 h-16 text-blue-600" />
          </div>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold mb-4"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mb-8"
        >
          {description}
        </motion.p>
        {action && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={action.onClick}>
              {action.label}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

