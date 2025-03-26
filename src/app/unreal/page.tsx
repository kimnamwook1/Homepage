"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Unreal() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation transparent={false} activePage="unreal" />

      {/* Full height section with white background */}
      <section className="bg-white min-h-screen w-full flex items-center justify-center pt-20">
        {/* Content will be added here */}
      </section>

      <Footer />
    </main>
  );
}
