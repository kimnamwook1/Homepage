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
    // 로컬 스토리지에서 애니메이션 상태 확인
    if (typeof window !== 'undefined') {
      const isAnimationComplete = localStorage.getItem('animationComplete') === 'true';
      
      // 이미 애니메이션이 완료되었다면 바로 애니메이션 상태 설정
      if (isAnimationComplete) {
        setAnimateIn(true);
      } else {
        // 처음 방문이면 지연 후 애니메이션 시작
        const timer = setTimeout(() => {
          setAnimateIn(true);
        }, 100);
        
        // 애니메이션이 완료되면 로컬 스토리지에 상태 저장
        const animationComplete = setTimeout(() => {
          localStorage.setItem('animationComplete', 'true');
        }, 2000); // 모든 애니메이션이 완료되도록 충분한 시간 설정
        
        return () => {
          clearTimeout(timer);
          clearTimeout(animationComplete);
        };
      }
    }
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
  const { animateIn } = useAnimation();
  
  // 애니메이션 완료 후 상태를 유지하기 위한 스타일 추가
  const textStyle = {
    opacity: animateIn ? 1 : 0, // 애니메이션 완료 후 항상 보이게 설정
    transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
    animationDelay: `${delay}ms`,
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  };
  
  return (
    <div className={`animate-fade-up ${className} ${animateIn ? 'animate-in' : ''}`} style={textStyle}>
      {children}
    </div>
  );
};
