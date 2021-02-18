import HeroBanner from "../herobanner/HeroBanner";
import About from "../about/About"
import Services from "../services/Services"
import Feedback from "../feedback/Feedback";
import CustomFooter from "../footer/CustomFooter";
import StatsCounter from "../statscounter/StatsCounter";

export default function Main() {
    return (
      <>
        <HeroBanner />
        <About />
        <Services />
        <Feedback />
        <StatsCounter />
        <CustomFooter />
      </>
    )
  }