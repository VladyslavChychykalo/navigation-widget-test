import { useEffect, useRef, useState } from "react";
import Widget from "./components/Widget/Widget";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

import idGenerator from "./utils/idGenerator";
import styles from "./App.module.css";

function App() {
  const [domTree, setDomTree] = useState(null);
  const [activeIndex, setActiveIndex] = useState("");
  const mainWrapperRef = useRef();
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

  useEffect(() => {
    const target = mainWrapperRef?.current;

    function addDomTree(data, depth = 0) {
      return data.map(({ id, nodeName, children = [] }) => {
        const o = {
          nodeName,
          href: id,
          children,
          id: idGenerator(),
          depth,
        };

        if (id === "widget") return null;

        if (children.length)
          o.children = addDomTree(Array.from(children), depth + 1);
        return o;
      });
    }

    const arr = addDomTree([target]);

    setDomTree(arr);
  }, []);

  return (
    <div id="wrapper" ref={mainWrapperRef} className={styles.appWrapper}>
      <Widget setActiveIndex={setActiveIndex} domTree={domTree} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
