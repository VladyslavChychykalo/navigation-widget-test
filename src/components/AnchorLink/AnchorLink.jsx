import React from "react";
import styles from "./AnchorLink.module.css";

const AnchorLink = ({ domTree }) => {
  return (
    <>
      {domTree?.map((item) => {
        if (!item) return null;

        return (
          <div
            key={item.id}
            className={styles.anchorLinkWrapper}
            style={{
              paddingLeft: `${item?.depth * 10}px`,
            }}
          >
            <a className={styles.anchorLink} href={`#${item.href}`}>
              TagName {item?.nodeName}
            </a>
            {Array.from(item.children)?.length ? (
              <AnchorLink domTree={Array.from(item.children)} />
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default AnchorLink;
