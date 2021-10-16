import React, { createContext, useContext, useEffect, useState } from 'react';


interface IDarkmodeContext {
  darkmode: boolean,
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkmodeContext = createContext<IDarkmodeContext|undefined>(undefined);

export const useDarkmodeContext = () => {
  const context = useContext(DarkmodeContext);

  if (context === undefined) {
    throw new Error('Call "useDarkmodeContext" only inside a DarkmodeContextProvider');
  }

  return context;
};

const getDarkmodeInitial = (): boolean => {
  const initial = localStorage.getItem('theme');
  return initial === 'dark';
}

const DarkmodeContextProvider: React.FC = ({children}) => {
  const [darkmode, setDarkmode] = useState<boolean>(getDarkmodeInitial());

  useEffect(() => {
    document.body.style.backgroundColor = darkmode ? '#06090F' : '#fff';
  }, [darkmode]);

  return (
    <DarkmodeContext.Provider value={{darkmode: darkmode, setDarkmode: setDarkmode}}>
      {children}
    </DarkmodeContext.Provider>
  )
};

export default DarkmodeContextProvider;
