"use client";
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 초기 다크모드 상태 감지
    if (typeof window !== 'undefined') {
      const darkModeOn = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      setIsDarkMode(darkModeOn);
      
      // HTML 요소에 dark 클래스 추가/제거
      if (darkModeOn) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // 다크모드 변경 감지 이벤트 리스너
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handler = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
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

