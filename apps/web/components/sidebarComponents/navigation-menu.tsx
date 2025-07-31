// "use client"

// import { Palette, Share2, Star, Clock, Folder, Archive } from "lucide-react"

// interface NavigationMenuProps {
//   collapsed: boolean
//   activeTab: string
//   onTabChange: (tab: string) => void
// }

// export default function NavigationMenu({ collapsed, activeTab, onTabChange }: NavigationMenuProps) {
//   const navigationItems = [
//     { id: "canvases", icon: Palette, label: "My Canvases", count: 12, color: "cyan" },
//     { id: "shared", icon: Share2, label: "Shared with me", count: 5, color: "purple" },
//     { id: "starred", icon: Star, label: "Starred", count: 3, color: "yellow" },
//     { id: "recent", icon: Clock, label: "Recent", count: 8, color: "green" },
//     { id: "folders", icon: Folder, label: "Folders", count: 4, color: "blue" },
//     { id: "archived", icon: Archive, label: "Archived", count: 2, color: "gray" },
//   ]

//   return (
//     <div className="mb-8">
//       {!collapsed && <h3 className="text-sm font-bold text-gray-400 mb-4 tracking-wider uppercase">Navigation</h3>}
//       <nav className="space-y-2">
//         {navigationItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => onTabChange(item.id)}
//             className={`w-full flex items-center ${
//               collapsed ? "justify-center px-3 py-3" : "justify-between px-4 py-3"
//             } rounded-xl transition-all duration-300 group ${
//               activeTab === item.id
//                 ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-white shadow-lg"
//                 : "text-gray-400 hover:text-white hover:bg-white/5 hover:border hover:border-white/10"
//             }`}
//           >
//             <div className="flex items-center space-x-3">
//               <item.icon className={`h-5 w-5 ${activeTab === item.id ? "text-cyan-400" : ""}`} />
//               {!collapsed && <span className="font-medium">{item.label}</span>}
//             </div>
//             {!collapsed && (
//               <div
//                 className={`${
//                   activeTab === item.id
//                     ? "bg-cyan-500/30 text-cyan-200 border-cyan-400/30"
//                     : "bg-gray-700/50 text-gray-300 border-gray-600/30"
//                 } text-xs px-2 py-1`}
//               >
//                 {item.count}
//               </div>
//             )}
//           </button>
//         ))}
//       </nav>
//     </div>
//   )
// }
