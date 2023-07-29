import { useEffect, useRef, useState } from "react";
import Widget from "./components/Widget/Widget";
import idGenerator from "./utils/idGenerator";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [domTree, setDomTree] = useState(null);
  const mainWrapperRef = useRef();

  useEffect(() => {
    const target = mainWrapperRef?.current;

    function addIcons(data, depth = 0) {
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
          o.children = addIcons(Array.from(children), depth + 1);
        return o;
      });
    }

    const arr = addIcons([target]);

    setDomTree(arr);
    // console.log(arr);
    // console.log("bodyRef", bodyRef);

    // console.log(addIcons(data))
    // ==
    // const config = {
    //   attributes: true,
    //   childList: true,
    //   subtree: true,
    // };

    // const callback = function (mutationsList, observer) {
    //   for (let mutation of mutationsList) {
    //     if (mutation.type === "childList") {
    //       console.log("A child node has been added or removed.");
    //     } else if (mutation.type === "attributes") {
    //       console.log(
    //         "The " + mutation.attributeName + " attribute was modified."
    //       );
    //     }
    //   }
    // };

    // const observer = new MutationObserver(callback);

    // console.log(observer);

    // observer.observe(target, config);

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

  return (
    <div id="wrapper" ref={mainWrapperRef} className="App">
      <Widget domTree={domTree} />
      <header id="header" className="App-header">
        <section id="section1">Test 1</section>
        <section>Test 2</section>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Apps.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
