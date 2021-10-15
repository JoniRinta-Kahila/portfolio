import React, { createContext, useContext, useState } from 'react';

interface IWebGLMessageContext {
  message: string,
  setMesssage: React.Dispatch<React.SetStateAction<string>>
}

const WebGLMessageContext = createContext<IWebGLMessageContext|undefined>(undefined);

export const useWebGLMessageContext = () => {
  const context = useContext(WebGLMessageContext);

  if (context === undefined) {
    throw new Error('Call "useWebGLMessageContext" only inside a WebGLMessageContextProvider');
  }

  return context;
};

const WebGLMessageContextProvider: React.FC = ({children}) => {
  const [message, setMessage] = useState<string>('')
  return (
    <WebGLMessageContext.Provider value={{message: message, setMesssage: setMessage}}>
      {children}
    </WebGLMessageContext.Provider>
  )
};

export default WebGLMessageContextProvider;
