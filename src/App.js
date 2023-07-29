import { useRef } from "react";
import Widget from "./components/Widget/Widget";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

import useGenerateDomTree from "./hooks/useGenerateDomTree";
import useActiveIndex from "./hooks/useActiveIndex";
import styles from "./App.module.css";

function App() {
  const mainWrapperRef = useRef();
  const { domTree } = useGenerateDomTree(mainWrapperRef);
  const { setActiveIndex } = useActiveIndex();

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
