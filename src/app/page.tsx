"use client";
import Navigation from "@/components/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 테스트를 위해 강제 다크모드 적용
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Navigation />
    </>
  );
}
