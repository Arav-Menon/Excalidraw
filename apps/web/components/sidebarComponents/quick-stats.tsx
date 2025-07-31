// "use client"

// interface QuickStatsProps {
//   collapsed: boolean
// }

// export default function QuickStats({ collapsed }: QuickStatsProps) {
//   const stats = [
//     { label: "Active Sessions", value: "3", trend: "+2", color: "text-green-400" },
//     { label: "Team Members", value: "12", trend: "+1", color: "text-blue-400" },
//     { label: "Storage", value: "2.3GB", trend: "+0.2GB", color: "text-purple-400" },
//   ]

//   if (collapsed) return null

//   return (
//     <div className="mb-8">
//       <h3 className="text-sm font-bold text-gray-400 mb-4 tracking-wider uppercase">Quick Stats</h3>
//       <div className="space-y-3">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl border border-white/10 hover:bg-gray-800/50 transition-colors duration-300"
//           >
//             <span className="text-sm text-gray-400">{stat.label}</span>
//             <div className="flex items-center space-x-2">
//               <span className="text-white font-semibold">{stat.value}</span>
//               <span className={`text-xs ${stat.color}`}>{stat.trend}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
