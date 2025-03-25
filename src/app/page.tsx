"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={true} />

      <section className="hero-section flex-grow flex items-center justify-center">
        <div className="tagline">
          We create opportunity.
        </div>
      </section>

      <Footer />
    </main>
  );
}
