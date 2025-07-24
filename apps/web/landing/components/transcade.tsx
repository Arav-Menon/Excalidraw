"use client"
import { Button } from "@repo/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Crown,
  Github,
  Heart,
  Rocket,
  Smartphone,
  Wand2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Transcade() {
  const navigate = useRouter()
  const feeback = [
    { icon: CheckCircle, text: "No limits" },
    { icon: Smartphone, text: "Any device" },
    { icon: Heart, text: "Forever free" },
    { icon: Crown, text: "Premium experience" },
  ];

  return (
    <>
      {/* Ultimate CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/50 to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-5xl mx-auto">
            {/* <div className="mb-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-200 px-8 py-4 text-xl font-bold backdrop-blur-sm">
              <Rocket className="h-6 w-6 mr-3 animate-pulse" />
              THE FUTURE IS NOW
            </div> */}

            <h2 className="text-5xl sm:text-8xl font-black mb-12 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                READY TO
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                TRANSCEND REALITY?
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Step into the next dimension of creativity. Where every stroke is
              magic, every collaboration is seamless, and every idea becomes
              extraordinary.
            </p>

            <div className="flex sm:flex-row gap-8 justify-center mb-16">
              <Button className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white px-8 py-4 text-xl font-black rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.1]">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center">
                  <Wand2 className="mr-4 h-10 w-10 group-hover:animate-spin" />
                  ENTER THE MATRIX
                  <ArrowRight className="ml-4 h-10 w-10 group-hover:translate-x-3 transition-transform" />
                </div>
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  navigate.push('/https://github.com/Arav-Menon/Excalidraw')
                }}
                // size="lg"
                className="group border-4 border-white/30 hover:border-white text-white hover:bg-white hover:text-black px-8 py-4 text-xl font-black rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-110 bg-transparent"
              >
                <div className="relative flex items-center">
                  <Github className="mr-4 h-10 w-10 group-hover:animate-bounce" />
                  EXPLORE CODE
                </div>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              {feeback.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:text-white transition-colors group"
                >
                  <item.icon className="h-6 w-6 group-hover:animate-pulse" />
                  <span className="font-bold text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
