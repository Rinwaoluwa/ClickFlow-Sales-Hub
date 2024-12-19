"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { LeadCard } from "./lead-card"
import { useState } from "react"
import peterOdejobiImage from "../assets/images/peterodejobi.jpg";
import { ProgressBar } from "./progress-bar"
import { Activity } from "./activites-card"
import { link } from "fs"
import { MicrosoftCoPilotIcon } from "@/assets/svgs/microsoft-copilot"


const leads = [
  {
    name: "Peter Odejobi",
    role: "Frontend Engineer",
    company: "",
    action: "Prepare for meeting with Peter Odejobi",
    description: "Drive impactful results by leveraging Peter's proven expertise in crafting cutting-edge solutions.",
    tags: ["Build scalabe software", "Expand business"],
    avatar: peterOdejobiImage.src,
    activity: "Google meet with Peter Odejobi",
    amount: "$2,000",
    timeline: "3 days to go",
    link: "https://www.linkedin.com/in/peterodejobi/"
  },
  {
    name: "Allan Munger",
    role: "Head of Real Estate Development",
    company: "Contoso Coffee",
    action: "Engage with Allan",
    description: "Prepare for high-buying intent meeting Copilot scheduled 2 PM regarding upgrading service contract.",
    tags: ["Upcoming meeting", "Due today"],
    avatar: "",
    activity: "Cafe A100 for Woodland Bank",
    amount: "$10,000",
    timeline: "12 days to close",
    link: ''
  },
]

export function CentralModal() {
  const [activeTab, setActiveTab] = useState(0)
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-purple-400 shadow-xl mb-3">
      <Card className="relative overflow-hidden bg-white rounded-xl">
        <div className="p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0">
              <MicrosoftCoPilotIcon height="20px" width="20px" />
              <h2 className="text-sm font-semibold">
                Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.
              </h2>
            </div>
            <ProgressBar />

            <motion.div
              animate={{ rotateZ: isExpanded ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className=""
            >
              <ChevronUp className="h-6 w-6" />
            </motion.div>
          </div>
          <p className="my-4 text-sm text-gray-500">
            Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
          </p>
          <motion.div
            animate={{ height: isExpanded ? "auto" : "0px" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 overflow-hidden"
          >
            <div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {leads.map((lead, index) => (
                  <LeadCard key={lead.name} lead={lead} />
                ))}
              </div>
              <div className="mt-2 flex justify-center items-center">
                {leads.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`mx-1 p-0 ${index === activeTab ? "bg-blue-500 w-8 h-1" : "bg-gray-200 h-2 w-2 rounded-md"}`}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            </div>
            <div className="space-x-1 border-l pl-8 lg:w-[50%]">
              <p className="mb-2 text-md text-gray-500">
                Other key activities
              </p>
              {leads.map((lead, index) => (
                <Activity
                  key={index}
                  action={lead.action}
                  activity={lead.activity}
                  amount={lead.amount}
                  avatar={lead.avatar}
                  company={lead.company}
                  timeline={lead.timeline}
                />
              ))}
              <p className="text-md font-medium text-blue-700">
                Show all key activites
              </p>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  )
}