import React, { useContext, createContext, useState } from "react";
import { useSections } from "hooks/useSections";

const SectionContext = createContext({});

export type SectionNames = "hero" | "about" | "products" | "gallery" | "contact";

type SectionContextType = {
  inViewSection: SectionNames;
  setInViewSection: React.Dispatch<React.SetStateAction<SectionNames>>;
  scrollToSection: (sectionName: SectionNames) => void;
  addSection: (sectionName: SectionNames, section: Element) => void;
  isScrolling: boolean;
};

type Props = {
  children: React.ReactNode;
};

export const SectionContextProvider = ({ children }: Props) => {
  const [inViewSection, setInViewSection] = useState<SectionNames>("hero");
  const { isScrolling,  addSection, scrollToSection } = useSections<SectionNames>();

  const context: SectionContextType = {
    inViewSection,
    setInViewSection,
    scrollToSection,
    addSection,
    isScrolling,
  };

  return (
    <SectionContext.Provider value={context} >
      {children}
    </SectionContext.Provider>
  )
};

export const useSectionContext = () => useContext(SectionContext) as SectionContextType;