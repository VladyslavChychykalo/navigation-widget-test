import { useRef } from "react";
import AnchorLink from "../AnchorLink";
import useToggle from "../../hooks/useToggle";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import styles from "./Widget.module.css";

const Widget = ({ domTree, setActiveIndex }) => {
  const backdropRef = useRef();
  const { toggle, handleToggle, handleBackdropClick } = useToggle({
    backdropRef,
  });

  return (
    <div className={styles.widget} id="widget">
      <button className={styles.buttonToggle} onClick={handleToggle}>
        Open Widget
      </button>
      {toggle && (
        <>
          <div
            onClick={handleBackdropClick}
            ref={backdropRef}
            className={styles.backdrop}
          />
          <section className={styles.widgetWrapper}>
            <h3>Dom Tree Widget</h3>
            <button onClick={handleToggle}>
              <CrossIcon />
            </button>
            <div>
              <AnchorLink setActiveIndex={setActiveIndex} domTree={domTree} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Widget;
