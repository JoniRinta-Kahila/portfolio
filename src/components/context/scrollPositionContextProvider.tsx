import React, { createContext, useContext, useEffect, useState } from 'react';

interface IScrollPositionContext {
  scrollY: number,
}

const ScrollPositionContext = createContext<IScrollPositionContext|undefined>(undefined);

export const useScrollPositionContext = () => {
  const context = useContext(ScrollPositionContext);

  if (context === undefined) {
    throw new Error('Call "useScrollPositionContext" only inside a ScrollPositionContextProvider');
  }

  return context;
}

const ScrollPositionContextProvider: React.FC = ({children}) => {
  const [scrollPosition, setScrollPosition] = useState<IScrollPositionContext>({scrollY: 0});

  const handleScroll = () => {
    const y = window.pageYOffset;
    setScrollPosition({scrollY: y});
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollPositionContext.Provider value={{scrollY: scrollPosition.scrollY}}>
      {children}
    </ScrollPositionContext.Provider>
  )
}

export default ScrollPositionContextProvider;
