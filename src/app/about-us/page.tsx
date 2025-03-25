"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={false} />

      <div className="relative h-[400px] w-full">
        <Image
          src="https://ext.same-assets.com/1331595516/2130891106.jpeg"
          alt="TheJPC Headquarters"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="section-title text-white text-5xl font-bold">TheJPC Agency</h1>
        </div>
      </div>

      <section className="about-section">
        <div className="container mx-auto max-w-5xl">
          <h2 className="about-heading">
            TheJPC delivers world-class opportunities to world-class clients.
          </h2>

          <p className="about-text">
            Positioned at the nexus of talent, content, brands, technology, sports, and live events,
            TheJPC creates limitless opportunities for the storytellers, trendsetters, icons, and
            thought leaders who shape popular culture.
          </p>

          <p className="about-text">
            Across film, television, music, sports, digital media, marketing, and beyond,
            we represent thousands of the world's leading actors, directors, writers,
            producers, musical artists, comedians, authors, athletes, coaches,
            broadcasters, teams, leagues, chefs, designers, fashion talent, consumer
            brands, and more.
          </p>

          <p className="about-text">
            In service of them, we are committed to remaining the strongest, most
            vibrant, and most innovative service company in the world.
          </p>

          <p className="about-text">
            Since our founding, TheJPC has continued to deliver on its promise
            that every client is represented by the whole agency. This collaborative
            approach benefits our clients now more than ever, as they look to build their
            careers and their brands across multiple disciplines and platforms.
          </p>

          <p className="about-text">
            With a global network of employees and strategic partners in
            North America, Europe, Asia, and beyond, TheJPC taps its unequaled internal and
            external ecosystem of experts, relationships, access, and industry
            intelligence to help ensure that our clients achieve their goals.
          </p>

          <p className="about-text">
            The trailblazer of the industry, TheJPC has created an ever-widening scope of
            services and businesses. We were the first talent agency to build a sports business,
            create an investment bank, launch a venture fund, found technology start-up
            companies, establish a business in China, create a brand marketing services
            business, and launch a philanthropic arm, among other industry innovations.
          </p>

          <p className="about-text">
            It is also our goal to lead the way in diversity, advocating with marketplace
            buyers for talent from historically underrepresented groups – and for the
            cultural and commercial value of inclusion. TheJPC continues to increase the
            diversity of our talent roster and our employees, and always will.
          </p>

          <p className="about-text">
            With a passion matched only by that of our clients, TheJPC is committed to
            crafting precedent-setting deals and building new brands and businesses
            driven by our clients' ideas, interests, and opportunities.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
