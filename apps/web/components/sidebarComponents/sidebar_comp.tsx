"use client"
import { useState } from "react";
import { DashboardSidebar } from "./dashboard-sidebar";

export default function SidebarComp() {

    const [ sidebarCollapsed, setSidebarCollapsed ] = useState()
    const [ activeTab, setActiveTab ] = useState();

    return (
    <>
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        //@ts-ignore
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </>
  );
}
