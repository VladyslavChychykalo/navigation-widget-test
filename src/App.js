import { useEffect, useRef, useState } from "react";
import Widget from "./components/Widget/Widget";
import idGenerator from "./utils/idGenerator";
import "./App.css";

function App() {
  const [domTree, setDomTree] = useState(null);
  const mainWrapperRef = useRef();

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
    <div id="wrapper" ref={mainWrapperRef} className="App">
      <Widget domTree={domTree} />

      <header id="header" className="App-header">
        <section id="section1">Test 1</section>
        <section>Test 2</section>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
