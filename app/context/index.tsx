import { createContext, useState } from "react";

export const GraficaContext = createContext<{ valores: { longitud: number[]; atenuacion: number[] }; setValores: React.Dispatch<React.SetStateAction<{ longitud: number[]; atenuacion: number[] }>> }>({ valores: { longitud: [0], atenuacion: [0] }, setValores: () => {} });

export const GraficaProvider = ({ children }: { children: React.ReactNode; }) => {
  const [valores, setValores] = useState<{ longitud: number[]; atenuacion: number[] }>({
    longitud: [],
    atenuacion: []
  });

  return (
    <GraficaContext.Provider value={{ valores, setValores }}>
      {children}
    </GraficaContext.Provider>
  );
};

