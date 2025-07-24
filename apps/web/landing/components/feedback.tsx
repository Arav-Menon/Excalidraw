import { Heart, Star, Users } from "lucide-react";

export default function Feedback() {

    const feedback = [
              {
                number: "5M+",
                label: "Creators",
                icon: Users,
                color: "from-cyan-500 to-blue-500",
              },
              {
                number: "100K+",
                label: "GitHub Stars",
                icon: Star,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "500+",
                label: "Contributors",
                icon: Heart,
                color: "from-green-500 to-emerald-500",
              },
              {
                number: "∞",
                label: "Possibilities",
                icon: Infinity,
                color: "from-orange-500 to-red-500",
              },
    ]

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TRUSTED BY MILLIONS
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Join the revolution that's reshaping digital creativity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {feedback.map((stat, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`relative bg-gradient-to-r ${stat.color} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                  <div className="relative">
                    {/* <stat.icon className="h-12 w-12 text-white mx-auto mb-4 group-hover:animate-pulse" /> */}
                    <div className="text-4xl sm:text-6xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80 font-bold text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
