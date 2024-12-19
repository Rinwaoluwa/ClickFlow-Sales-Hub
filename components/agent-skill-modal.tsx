"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronUp, ChevronDown, CircleUser, NotebookText, ChartNoAxesGantt, Files, SquareArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MicrosoftCoPilotIcon } from "@/assets/svgs/microsoft-copilot"
import OutlookIcon from "../assets/svgs/outlookicon.svg";

interface AgentSkillModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgentSkillModal({ isOpen, onClose }: AgentSkillModalProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="w-full max-w-2xl"
          >
            <Card className="relative overflow-hidden bg-white p-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="mb-6 flex items-center gap-3">
                <MicrosoftCoPilotIcon height="20px" width="20px" />
                <h2 className="text-xl font-semibold">Agent skill</h2>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-white-50/50 shadow-sm border p-4">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex w-full items-center justify-between"
                  >
                    <p className="text-xs font-semibold text-gray-900">
                      Check if on-hand inventory will allow all sales orders to ship without delay
                    </p>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                          <p className="text-xs text-gray-900 leading-relaxed">
                            When{" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <CircleUser className="h-4 w-4 mr-1" />
                              any vendor
                            </span>{" "}
                            sends an email with changes to{" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <NotebookText className="h-4 w-4 mr-1" />
                              confirmed purchase orders
                            </span>
                            , check if the resulting {" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <ChartNoAxesGantt className="h-4 w-4 mr-1" />
                              on-hand inventory
                            </span>{" "}
                            will allow{" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <Files className="h-4 w-4 mr-1" />
                              all sales orders
                            </span>{" "}
                            to{" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <SquareArrowUpRight className="h-4 w-4 mr-1" />
                              ship without delay
                            </span>
                            . If so, {" "}
                            <span className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-blue-500 hover:bg-blue-200 mb-2">
                              <SquareArrowUpRight className="h-4 w-4 mr-1" />
                              update the purchase order
                            </span>{" "}
                            to reflect the change.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Image src={OutlookIcon} alt="Outlook" width={20} height={20} />
                    <div>
                      <h3 className="font-medium">Enable email access</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Allow the agent to access email inboxes to read mail from known vendors
                  </p>

                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        defaultValue="purchasing@contoso.com"
                        className="pl-8 bg-gray-50/50 border-gray-200"
                      />
                      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <span className="text-xs font-medium">P</span>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Allow access
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="secondary" className="bg-gray-100 opacity-[.5]">
                    Activate
                  </Button>
                  <Button variant="outline" onClick={onClose} >
                    Close
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

