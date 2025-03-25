"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={false} />

      <section className="contact-section">
        <div className="container mx-auto max-w-6xl">
          <h1>Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="contact-card">
              <h2>Los Angeles</h2>
              <div className="contact-info">
                <p>2000 Avenue of the Stars</p>
                <p>Los Angeles, CA 90067</p>
                <p>t: +1 424 288 2000</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>New York</h2>
              <div className="contact-info">
                <p>405 Lexington Avenue, 22nd Floor</p>
                <p>New York, NY 10174</p>
                <p>t: +1 212 277 9000</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>Nashville</h2>
              <div className="contact-info">
                <p>401 Commerce Street, Penthouse</p>
                <p>Nashville, TN 37219</p>
                <p>t: +1 615 383 8787</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>Washington D.C.</h2>
              <div className="contact-info">
                <p>1500 K Street NW</p>
                <p>Washington DC, 20005</p>
                <p>t: +1 771 444 5301</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>London</h2>
              <div className="contact-info">
                <p>12 Hammersmith Grove</p>
                <p>London W6 7AP</p>
                <p>United Kingdom</p>
                <p>t: +44 20 8846 3000</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>Beijing</h2>
              <div className="contact-info">
                <p>5/F, World Financial Center</p>
                <p>1E 3rd Ring Middle Rd, Guomao</p>
                <p>Chaoyang, Beijing, China, 100020</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>Shanghai</h2>
              <div className="contact-info">
                <p>Unit 2704-2705, Tower 3</p>
                <p>Shanghai Jing An Kerry Center</p>
                <p>1228 Yan An Middle Road</p>
                <p>Shanghai, China 200040</p>
              </div>
            </div>

            <div className="contact-card">
              <h2>Singapore</h2>
              <div className="contact-info">
                <p>88 Market Street, 40th Floor</p>
                <p>Singapore 048948</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
