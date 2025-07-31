"use client"

import { Button } from "@repo/ui/button"
import { Maximize2, Minimize2 } from "lucide-react"

interface SidebarToggleProps {
  collapsed: boolean
  onToggle: () => void
}

export default function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {!collapsed && <h2 className="text-lg font-bold text-gray-300 tracking-wide">WORKSPACE</h2>}
      <Button
        variant="ghost"
        onClick={onToggle}
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        {collapsed ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
      </Button>
    </div>
  )
}
