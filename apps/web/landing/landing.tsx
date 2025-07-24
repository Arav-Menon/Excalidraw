import NavBar from "./components/appBar";
import Bento from "./components/bento";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Transcade from "./components/transcade";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white relative overflow-hidden">
      {/* ===== Animated Dotted Gradient Background ===== */}
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />

        {/* Blurred Pulsing Blobs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse delay-2000" />
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ===== Page Content ===== */}
      <main className="relative z-10">
        <NavBar />
        <Hero />
        <Bento />
        <Feedback />
        <Transcade />
        <Footer />
      </main>
    </div>
  );
}
