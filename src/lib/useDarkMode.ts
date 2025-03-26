"use client";
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 초기 다크모드 상태 감지
    if (typeof window !== 'undefined') {
      setIsDarkMode(
        window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
      
      // 다크모드 변경 감지 이벤트 리스너
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handler = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      // 이벤트 리스너 추가 (최신 브라우저)
      if (darkModeMediaQuery.addEventListener) {
        darkModeMediaQuery.addEventListener('change', handler);
      }
      
      // 클린업 함수
      return () => {
        if (darkModeMediaQuery.removeEventListener) {
          darkModeMediaQuery.removeEventListener('change', handler);
        }
      };
    }
  }, []);

  return isDarkMode;
}
