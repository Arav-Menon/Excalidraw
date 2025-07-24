import { Github, PenTool, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/ui/button";

export default function NavBar() {
    return(
        <>
        <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative h-14 w-14 bg-black rounded-2xl flex items-center justify-center">
                  <PenTool className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Excalidraw
                </span>
                <div className="text-xs text-gray-400 font-medium">NEXT-GEN WHITEBOARD</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Showcase", "Community"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white border border-white/20 hover:border-white/40 transition-all duration-300 p-2 px-5 rounded p-2 "
              >
                <div className="flex items-center  "><Github className="h-4 w-4 mr-2" />
                <span className="font-bold">50.2k</span></div>
              </Button>
              <Button className="relative group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold px-6 py-3 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative flex items-center">
                  <Rocket className="h-4 w-4 mr-2" />
                  Launch
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}