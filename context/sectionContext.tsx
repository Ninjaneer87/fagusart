import React, { useContext, createContext, useEffect, useState } from "react";

import { useSections } from "hooks/useSections";

export type SectionNames = "hero" | "about" | "products" | "gallery" | "contact";

export type SectionProps = {
  setInViewSection: (sectionName: SectionNames) => void;
  addSection: (sectionName: SectionNames, section: Element) => void;
};

type SectionContextType = {
  inViewSection: SectionNames;
  setInViewSection: React.Dispatch<React.SetStateAction<SectionNames>>;
  scrollToSection: (sectionName: SectionNames) => void;
  addSection: (sectionName: SectionNames, section: Element) => void;
};

const SectionContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const SectionContextProvider = ({ children }: Props) => {
  const [inViewSection, setInViewSection] = useState<SectionNames>("hero");
  const { addSection, scrollToSection } = useSections<SectionNames>();

  const context: SectionContextType = {
    inViewSection,
    setInViewSection,
    scrollToSection,
    addSection,
  };

  return (
    <SectionContext.Provider value={context} >
      {children}
    </SectionContext.Provider>
  )
};

export const useSectionContext = () => useContext(SectionContext) as SectionContextType;