
import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Security from "./sections/Security";
import CallToAction from "./sections/CallToAction";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Benefits />
        <Security />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
