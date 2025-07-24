import NavBar from "./components/appBar";
import Bento from "./components/bento";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Transcade from "./components/transcade";

export default function Landing() {
  return (
    <div className="bg-[#0c0c0c]">
      <NavBar />
      <Hero />
      <Bento />
      <Feedback/>
      <Transcade/>
      <Footer/>
    </div>
  )
}
