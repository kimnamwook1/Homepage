"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScene, setCurrentScene] = useState(1);

  useEffect(() => {
    // Simulate loading sequence
    const timer1 = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Animate to scene 2 after a delay
    const timer2 = setTimeout(() => {
      setCurrentScene(2);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`layout-container ${isLoading ? 'loading-scene' : ''}`}>
      <Navigation transparent={true} />

      <div className="animation-intro">
        <section className="hero-container full_vh bg-white">
          <div className="hero-text-container vertical-align">
            <div className="gutter-container">
              
              {/* Scene 1: Logo */}
              <div className={`animated-scene ${currentScene === 1 ? 'visible' : 'hidden'}`}>
                <div className="logo-container text-center">
                  <span className="text-5xl font-semibold">
                    <span className="font-bold">T</span>he <span className="font-bold">JPC</span>
                  </span>
                </div>
              </div>
              
              {/* Scene 2: Slogan */}
              <div className={`animated-scene ${currentScene === 2 ? 'visible' : 'hidden'}`}>
                <div className="slogan-container">
                  <div className="slogan-line text-3xl md:text-4xl font-medium my-4">
                    We create opportunity.
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>

      <div className={`loading ${!isLoading ? 'hidden' : ''}`}></div>

      <Footer />
    </div>
  );
}
