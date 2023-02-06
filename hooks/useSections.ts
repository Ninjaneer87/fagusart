import { useRef, useCallback, useState } from "react";

export function useSections<T extends string>() {
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = useRef({} as Record<T, Element>);
  const timer = useRef(null);

  const onScrollEnd = useCallback((_e: Event) => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsScrolling(false);
      window.removeEventListener("scroll", onScrollEnd);
    }, 100);
  }, []);

  const addSection = useCallback((sectionName: T, section: Element) => {
    if (!sections.current[sectionName]) sections.current[sectionName] = section;
  }, []);

  const scrollToSection = useCallback((sectionName: T) => {
    const section = sections.current[sectionName];
    if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: "smooth" });
      window.addEventListener("scroll", onScrollEnd);
    }
  }, []);

  return { isScrolling, sections, addSection, scrollToSection };
}
