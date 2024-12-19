"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CentralModal } from "@/components/central-modal"
import { LeadsTable } from "@/components/leads-table"

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <div className="flex flex-col w-full">
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CentralModal />
          </motion.div>
        )}
      </AnimatePresence>
      <LeadsTable />
    </div>
  )
}

