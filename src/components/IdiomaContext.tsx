"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Idioma = "es" | "en";

// 🌟 CORREGIDO: Añadido el cierre > y el paréntesis ( correcto para inicializarlo
const IdiomaContext = createContext<{
  idioma: Idioma;
  setIdioma: (lang: Idioma) => void;
}>({ 
  idioma: "es", 
  setIdioma: () => {} 
});

export function IdiomaProvider({ children }: { children: React.ReactNode }) {
  const [idioma, setIdiomaState] = useState<Idioma>("es");

  useEffect(() => {
    const guardado = localStorage.getItem("web-idioma") as Idioma;
    if (guardado) setIdiomaState(guardado);
  }, []);

  const setIdioma = (lang: Idioma) => {
    setIdiomaState(lang);
    localStorage.setItem("web-idioma", lang);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export const useIdioma = () => useContext(IdiomaContext);
