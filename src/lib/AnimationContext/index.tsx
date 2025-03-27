"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    // 페이지 로드 시 애니메이션 시작 (약간의 지연 추가)
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
  return (
    <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
