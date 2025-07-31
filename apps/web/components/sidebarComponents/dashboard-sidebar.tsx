"use client";

import SidebarToggle from "./sidebar-toggle";
import QuickActions from "./quick-actions";

interface DashboardSidebarProps {
  collapsed: any;
  onToggleCollapse: () => void;
  activeTab: any;
  onTabChange: any;
}

export function DashboardSidebar({
  collapsed,
  onToggleCollapse,
  activeTab,
  onTabChange,
}: DashboardSidebarProps) {
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-80"
      } min-h-screen bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border-r border-white/10 p-6 transition-all duration-300 flex flex-col`}
    >
      <SidebarToggle collapsed={collapsed} onToggle={onToggleCollapse} />

      <QuickActions collapsed={collapsed} />

    </aside>
  );
}
