import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StorySection from "./components/StorySection";
import MemoriesSection from "./components/MemoriesSection";
import RememberingSection from "./components/RememberingSection";
import JourneySection from "./components/JourneySection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <StorySection />
      <MemoriesSection />
      <RememberingSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default App;
