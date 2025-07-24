import { Button } from "@repo/ui/button";
import {
  ArrowRight,
  Badge,
  Crown,
  Diamond,
  Download,
  Globe,
  Lightbulb,
  MousePointer,
  Sparkles,
  Wand2,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* Floating Badge */}
            <div className="flex justify-center mb-12">
              <div className="relative group text-white">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative border-0 bg-black rounded-[120px] text-white p-4 flex items-center py-3 text-lg font-bold">
                  <Crown className="h-5 w-5 mr-2 text-yellow-400" />
                  THE FUTURE OF CREATIVITY
                  <Sparkles className="h-5 w-5 ml-2 text-cyan-400 animate-pulse" />
                </div>
                {/* <Badge className="relative bg-black border-0 text-white px-8 py-3 text-lg font-bold"></Badge> */}
              </div>
            </div>

            {/* Mind-blowing Title */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-pulse">
                  SKETCH
                </span>
                <div className="absolute -top-4 -right-4 text-2xl animate-spin">
                  ✨
                </div>
              </div>
              <br />
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  THE
                </span>
                <div className="absolute -top-6 -left-6 text-3xl animate-bounce">
                  🚀
                </div>
              </div>
              <br />
              <div className="relative inline-block group">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:via-orange-400 group-hover:to-red-400 transition-all duration-1000">
                  IMPOSSIBLE
                </span>
                <div className="absolute -bottom-4 -right-8 text-4xl animate-pulse">
                  💎
                </div>
              </div>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the next evolution of digital creativity. Where
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold">
                {" "}
                AI meets artistry
              </span>
              , and
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                {" "}
                imagination becomes reality
              </span>
              .
            </p>

            {/* Futuristic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <Button
                // size="lg"
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white px-8 py-4 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.1]"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center rounded">
                  <Wand2 className="mr-4 h-8 w-8 group-hover:animate-spin" />
                  CREATE MAGIC
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </Button>
            </div>

            {/* 3D Hero Visual */}
            <div className="relative mx-auto max-w-7xl">
              <div className="relative group perspective-1000">
                <div className="relative transform-gpu transition-all duration-1000 hover:rotate-y-12 hover:rotate-x-6">
                  {/* Main Interface Mockup */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                    <img
                      src="dfdgd"
                      width={1200}
                      height={600}
                      className="rounded-2xl shadow-2xl"
                    />

                    {/* Floating UI Elements */}
                    <div className="absolute -top-8 -left-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                      <Lightbulb className="inline h-5 w-5 mr-2" />
                      AI POWERED
                    </div>

                    <div className="absolute -top-6 -right-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                      {/* <Infinity className="inline h-5 w-5 mr-2" /> */}
                      UNLIMITED
                    </div>

                    <div className="absolute -bottom-8 -left-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                      <Globe className="inline h-5 w-5 mr-2" />
                      GLOBAL SYNC
                    </div>

                    <div className="absolute -bottom-6 -right-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                      <Diamond className="inline h-5 w-5 mr-2" />
                      PREMIUM FREE
                    </div>
                  </div>

                  {/* Holographic Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl animate-pulse"></div>
                </div>

                {/* Floating Collaboration Avatars */}
                <div className="absolute top-16 left-8 animate-float">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full font-bold shadow-2xl">
                    <MousePointer className="inline h-4 w-4 mr-2" />
                    Alex (Live)
                  </div>
                </div>

                <div className="absolute top-32 right-12 animate-float delay-1000">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-2xl">
                    <MousePointer className="inline h-4 w-4 mr-2" />
                    Sarah (Drawing)
                  </div>
                </div>

                <div className="absolute bottom-24 left-16 animate-float delay-2000">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-2xl">
                    <MousePointer className="inline h-4 w-4 mr-2" />
                    Mike (Editing)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
