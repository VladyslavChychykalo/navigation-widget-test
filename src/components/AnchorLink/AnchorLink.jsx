import React from "react";
import styles from "./AnchorLink.module.css";

const AnchorLink = ({ domTree, setActiveIndex }) => {
  return (
    <>
      {domTree?.map((item) => {
        return (
          <div
            key={item.id}
            className={styles.anchorLinkWrapper}
            style={{
              paddingLeft: `${item?.depth * 10}px`,
            }}
          >
            <a
              id={`link-${item.href}`}
              onClick={() => setActiveIndex(item.href)}
              className={styles.anchorLink}
              href={`#${item.href}`}
            >
              TagName {item?.nodeName}
            </a>
            {Array.from(item.children)?.length ? (
              <AnchorLink
                setActiveIndex={setActiveIndex}
                domTree={Array.from(item.children)}
              />
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default AnchorLink;
