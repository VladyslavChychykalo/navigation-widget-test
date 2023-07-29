import { useState, useEffect } from "react";

const useToggle = ({ backdropRef }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code !== `Escape`) return;

      setToggle(false);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleBackdropClick = (e) => {
    const { current } = backdropRef;

    if (current && e.target !== current) return;

    setToggle(false);
  };

  return { toggle, handleToggle, handleBackdropClick };
};

export default useToggle;
