import React from "react";

const AnchorLink = ({ domTree }) => {
  return (
    <>
      {domTree?.map((item) => {
        if (!item) return null;

        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "start",
              paddingLeft: `${item?.depth * 10}px`,
            }}
          >
            <a
              style={{
                marginBottom: "10px",
              }}
              href={`#${item.href}`}
            >
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
