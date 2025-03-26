"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Enterprise() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={false} activePage="enterprise" />

      {/* Full height hero section with red background */}
      <section className="bg-primary-caa-red min-h-screen w-full flex items-center justify-center pt-20">
        <div className="text-white text-4xl md:text-5xl font-medium text-center px-4">
          We create opportunity.
        </div>
      </section>

      <Footer />
    </main>
  );
}
