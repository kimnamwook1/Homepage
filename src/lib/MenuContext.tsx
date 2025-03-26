"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type MenuContextType = {
  activePage: string | null;
  menuActive: boolean;
  setActivePage: (page: string | null) => void;
  setMenuActive: (active: boolean) => void;
};

// 기본값으로 컨텍스트 생성
const MenuContext = createContext<MenuContextType>({
  activePage: null,
  menuActive: false,
  setActivePage: () => {},
  setMenuActive: () => {},
});

// 컨텍스트 제공자 컴포넌트
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState<string | null>(null);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <MenuContext.Provider value={{
      activePage,
      menuActive,
      setActivePage,
      setMenuActive,
    }}>
      {children}
    </MenuContext.Provider>
  );
};

// 컨텍스트 사용을 위한 훅
export const useMenu = () => useContext(MenuContext);
