"use client";
import { useState, useEffect } from "react";

// 항상 라이트 모드를 반환하는 훅 (다크 모드 사용 중단)
export default function useDarkMode() {
  useEffect(() => {
    // HTML 요소에 light 클래스 추가 및 dark 클래스 제거
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    
    // 다크모드 미디어 쿼리 대응
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // 미디어 쿼리 변경에 대응하는 함수
    const handleChange = () => {
      // 다크모드가 감지되더라도 항상 라이트 모드 강제 적용
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    };
    
    // 초기 실행 및 이벤트 리스너 등록
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // 항상 false (라이트 모드) 반환
  return false;
}
