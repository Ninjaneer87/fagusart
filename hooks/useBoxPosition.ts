import { useCallback, useEffect, useRef, useState, CSSProperties } from "react";
import { useFontLoaded } from "./useFontLoaded";
import { useMounted } from "./useMounted";

const initialBox = {
  "--top": "0px",
  "--left": "0px",
  "--width": "0px",
  "--height": "0px",
};

const boxes: { [key: string]: typeof initialBox } = {};

const setBoxes = (element: HTMLElement) => {
  const boxElements = [...element.parentElement.children] as HTMLElement[];
  boxElements.forEach(box => {
    if(box.dataset.boxTrigger) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = box;
      boxes[box.dataset.boxTrigger] = {
        "--top": `${Math.round(offsetTop)}px`,
        "--left": `${Math.round(offsetLeft)}px`,
        "--width": `${Math.round(offsetWidth)}px`,
        "--height": `${Math.round(offsetHeight)}px`,
      };
    }
  });
};

export default function useBoxPosition<T extends HTMLElement, C extends string>(changeTrigger: C) {
  const [boxPosition, setBoxPosition] = useState(initialBox);
  const [mounted] = useMounted();
  const fontLoaded = useFontLoaded();
  const boxRef = useRef<T>(null);

  const setPosition = useCallback(() => {
    if(boxes[changeTrigger]) {
      setBoxPosition(boxes[changeTrigger]);
      return;
    }
    
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = boxRef.current;
    const newBoxPosition = {
      "--top": `${Math.round(offsetTop)}px`,
      "--left": `${Math.round(offsetLeft)}px`,
      "--width": `${Math.round(offsetWidth)}px`,
      "--height": `${Math.round(offsetHeight)}px`,
    };
    setBoxPosition(newBoxPosition);
    boxes[changeTrigger] = newBoxPosition;
  }, [changeTrigger]);

  useEffect(setPosition, [changeTrigger]);

  useEffect(() => {
    if(boxRef.current) {
      setBoxes(boxRef.current);
      setPosition();
    }
  }, [fontLoaded, mounted]);

  useEffect(() => {
    window.addEventListener("resize", setPosition);
    return () => window.removeEventListener("resize", setPosition);
  }, [setPosition]);

  return { boxRef, boxPosition: boxPosition as CSSProperties };
}
