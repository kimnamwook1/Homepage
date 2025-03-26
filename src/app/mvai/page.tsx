"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function MVAI() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={false} activePage="mvai" />

      {/* Content section with white background */}
      <section className="bg-white min-h-screen w-full" aria-hidden="true">
        {/* Hidden content to push down the layout */}
      </section>

      <Footer />
    </main>
  );
}
