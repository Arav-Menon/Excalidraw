import {
  Badge,
  Brush,
  CheckCircle,
  Heart,
  Icon,
  Lock,
  Share2,
  Target,
  Users,
  ZapIcon,
} from "lucide-react";

export default function Bento() {
  const bentoCard = [
    {
      icon: ZapIcon,
      title: "Lightning Speed",
      description: "Blazing fast performance with zero latency",
      gradient: "from-yellow-900/30 to-orange-900/30",
      iconColor: "text-yellow-400",
    },
    {
      icon: Lock,
      title: "Fort Knox Security",
      description: "Military-grade encryption for your creations",
      gradient: "from-green-900/30 to-emerald-900/30",
      iconColor: "text-green-400",
    },
    {
      icon: Share2,
      title: "Universal Sharing",
      description: "Share across any platform, any device, anywhere",
      gradient: "from-pink-900/30 to-red-900/30",
      iconColor: "text-pink-400",
    },
    {
      icon: Heart,
      title: "Open Source Love",
      description: "Built by the community, for the community",
      gradient: "from-red-900/30 to-pink-900/30",
      iconColor: "text-red-400",
    },
  ];

  return (
    <>
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                BEYOND
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IMAGINATION
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Features that redefine what's possible in digital creativity
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Large Feature Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-500 group overflow-hidden rounded-xl">
              <div className="p-12 relative">
                <div className="absolute top-4 right-4">
                  <Brush className="h-12 w-12 text-purple-400 group-hover:animate-spin transition-all duration-500" />
                </div>
                <h3 className="text-4xl font-black text-white mb-6 group-hover:text-purple-300 transition-colors">
                  AI-Powered Drawing
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Revolutionary AI assistance that understands your creative
                  intent and helps bring your ideas to life with unprecedented
                  precision and style.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Smart Suggestions", "Auto-Complete", "Style Transfer"].map(
                    (tag) => (
                      <Badge
                        key={tag}
                        className="bg-purple-500/20 text-purple-200 border border-purple-500/30"
                      >
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Tall Feature Card */}
            <div className="lg:row-span-2 bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-500 group rounded-xl ">
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <Users className="h-16 w-16 text-cyan-400 mb-6 group-hover:animate-pulse" />
                  <h3 className="text-3xl font-black text-white mb-4">
                    Quantum Collaboration
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Experience real-time collaboration that transcends physical
                    boundaries with quantum-speed synchronization.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Instant Sync",
                    "Live Cursors",
                    "Voice Chat",
                    "Screen Share",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-cyan-200"
                    >
                      <CheckCircle className="h-4 w-4 mr-3 text-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Medium Feature Cards */}
            {bentoCard.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-500 group hover:scale-105 rounded-xl `}
              >
                <div className="p-8">
                  <Users
                    className={`h-12 w-12 ${feature.iconColor} mb-6 group-hover:animate-bounce`}
                  />
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
