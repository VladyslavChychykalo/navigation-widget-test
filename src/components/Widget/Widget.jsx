import React from "react";
import AnchorLink from "../AnchorLink";
import useToggle from "../../hooks/useToggle";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import styles from "./Widget.module.css";

const Widget = ({ domTree }) => {
  const { toggle, handleToggle } = useToggle();

  return (
    <div id="widget">
      <button className={styles.buttonToggle} onClick={handleToggle}>
        Open Widget
      </button>
      {toggle && (
        <section className={styles.widgetWrapper}>
          <h3>Dom Tree Widget</h3>
          <button onClick={handleToggle}>
            <CrossIcon />
          </button>
          <div>
            <AnchorLink domTree={domTree} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Widget;
