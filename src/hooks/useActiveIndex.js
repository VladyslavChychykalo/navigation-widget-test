import { useState, useRef, useEffect } from "react";

const useActiveIndex = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const previousActiveIndex = useRef();

  useEffect(() => {
    if (!activeIndex) return;

    if (previousActiveIndex.current) {
      document
        .getElementById(previousActiveIndex.current)
        .classList.remove("gradient-animation");

      document.getElementById(previousActiveIndex.current).style.color =
        "#000000";
    }

    document.getElementById(activeIndex).classList.add("gradient-animation");
    document.getElementById(activeIndex).style.color = "#ffffff";

    previousActiveIndex.current = activeIndex;
  }, [activeIndex]);

  return { setActiveIndex };
};

export default useActiveIndex;
