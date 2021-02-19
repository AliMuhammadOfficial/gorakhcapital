import HeroBanner from "./HeroBanner";
import About from "./about/About"
import Services from "./services/Services"
import Feedback from "./feedback/Feedback";
import Footer from "../logged_out/Footer";
import StatsCounter from "./statscounter/StatsCounter";

export default function Main() {
    return (
      <>
        <HeroBanner />
        <About />
        <Services />
        <Feedback />
        <StatsCounter />
        <Footer />
      </>
    )
  }