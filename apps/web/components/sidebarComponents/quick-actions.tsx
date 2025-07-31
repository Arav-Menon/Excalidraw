"use client"

import { Button } from "@repo/ui/button"
import { Plus, Users, UserPlus, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface QuickActionsProps {
  collapsed: any
}

export default function QuickActions({ collapsed }: QuickActionsProps) {
  const router = useRouter();
  const actions = [
    {
      id: "new-canvas",
      icon: Plus,
      link: "/canvas/workspace",
      label: "New Canvas",
      gradient: "from-cyan-500 via-purple-500 to-pink-500",
      hoverGradient: "hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400",
    },
    {
      id: "create-room",
      icon: Users,
      link: "/canvas/:roomId",
      label: "Create Room",
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "hover:from-purple-400 hover:to-pink-400",
    },
    {
      id: "join-room",
      icon: UserPlus,
      label: "Join Room",
      link: "/canvas/:roomId",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "hover:from-green-400 hover:to-emerald-400",
    },
  ]

  return (
    <div className="mb-8">
      {!collapsed && <h3 className="text-sm font-bold text-gray-400 mb-4 tracking-wider uppercase">Quick Actions</h3>}
      <div className="space-y-3">
        {actions.map((action, redirect) => (
          <div key={action.id} className="relative group">
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${action.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500`}
            ></div>
            <button
              className={`relative flex px-4 w-full bg-gradient-to-r ${action.gradient} ${action.hoverGradient} text-white ${
                collapsed ? "px-3 py-3" : "py-4"
              } text-lg font-black rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 border-0`}
              //@ts-ignore
              onClick={router.push('canvas/workspace')}
            >
              <action.icon className="h-6 w-6" />
              {!collapsed && (
                <>
                  <span className="mx-3">{action.label}</span>
                  <ArrowRight className="h-6 w-6 ml-auto group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
