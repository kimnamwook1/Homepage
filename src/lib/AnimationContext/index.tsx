"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// 애니메이션 컨텍스트 타입 정의
type AnimationContextType = {
  animateIn: boolean;
};

// 컨텍스트 생성
const AnimationContext = createContext<AnimationContextType>({ animateIn: false });

// 컨텍스트 훅 생성
export const useAnimation = () => useContext(AnimationContext);

// 애니메이션 프로바이더 컴포넌트
export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animateIn, setAnimateIn] = useState(false);
  const pathname = usePathname(); // 현재 페이지 경로 가져오기

  useEffect(() => {
    // 페이지 경로가 변경될 때마다 애니메이션 상태 초기화 및 다시 실행
    if (typeof window !== 'undefined') {
      // 애니메이션 상태 초기화
      setAnimateIn(false);
      
      // 지연 후 애니메이션 시작
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 100);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [pathname]); // 페이지 경로가 변경될 때마다 실행

  return (
    <AnimationContext.Provider value={{ animateIn }}>
      {children}
    </AnimationContext.Provider>
  );
};

// 애니메이션 래퍼 컴포넌트
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const { animateIn } = useAnimation();

  return (
    <div className={`${className} ${animateIn ? 'animate-in' : ''}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// 애니메이션 텍스트 컴포넌트
export const AnimatedText: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const { animateIn } = useAnimation();
  
  // 인라인 스타일만 사용하여 애니메이션 제어
  const textStyle = {
    opacity: animateIn ? 1 : 0,
    transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`
  };
  
  return (
    <div className={`${className}`} style={textStyle}>
      {children}
    </div>
  );
};
