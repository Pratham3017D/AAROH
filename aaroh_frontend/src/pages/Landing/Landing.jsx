import Hero from "../../components/hero/Hero";
import WhyAaroh from "../../components/whyAaroh/WhyAaroh";
import HowAaroh from "../../components/howAaroh/HowAaroh";
import InnovationLifecycle from "../../components/lifecycle/InnovationLifecycle";
import Talks from "../../components/talks/Talks";

function Landing() {
  return (
    <main className="landing-page">
      <Hero />
      <WhyAaroh />
      <HowAaroh />
      <InnovationLifecycle />
      <Talks />
    </main>
  );
}

export default Landing;