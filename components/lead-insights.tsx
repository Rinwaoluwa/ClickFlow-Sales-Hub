"use client"

import { Check, Star, Moon, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Gemini } from '@/assets/svgs/gemini'

interface LeadInsightsProps {
  name: string
  company: string
  revenue: string
}

export function LeadInsights({ name, company, revenue }: LeadInsightsProps) {
  return (
    <div className="space-y-4 bg-white p-3 rounded-xl shadow-md">
      <div className="rounded-lg bg-blue-50/50 p-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-blue-700">Why I picked this lead</h3>
        </div>

        <ul className="list-disc space-y-2 text-gray-700 text-xs pl-4">
          <li>{name} is a key decision-maker and was browsing 'espresso machines' on First Coffee's website.</li>
          <li>Multiple people reported 'slowness' during service requests.</li>
          <li>{company} currently sees $2000 in revenue from their in-store coffee shops.</li>
        </ul>

        <div className="grid grid-cols-3 gap-2">
          <Card className="p-1">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Decision maker</div>
                <div className="font-semibold text-blue-600 text-xs">Yes</div>
              </div>
            </div>
          </Card>

          <Card className="p-1">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Potential deal value</div>
                <div className="font-semibold text-amber-600 text-xs">$1M</div>
              </div>
            </div>
          </Card>

          <Card className="p-1">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                <Moon className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Intent</div>
                <div className="font-semibold text-purple-600 text-xs">High</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center gap-1">
            <Gemini width="16" height="16" />
            <span className="text-xs text-gray-500">1</span>
            <span className="text-xs text-gray-700">D365 Sales</span>
            <span className="text-xs text-gray-500">+2</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">AI-generated content may be incorrect</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ThumbsUp className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ThumbsDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
