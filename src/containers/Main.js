import HeroBanner from "./HeroBanner";
import About from "./About"
import Services from "./Services"
import Feedback from "./Feedback";
import Footer from "../logged_out/Footer";
import StatsCounter from "./StatsCounter";

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