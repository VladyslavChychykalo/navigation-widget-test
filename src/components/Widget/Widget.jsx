import React from "react";
import AnchorLink from "../AnchorLink";

const Widget = ({ domTree }) => {
  return (
    <section id="widget">
      <h3>Dom Tree Widget</h3>
      <div>
        <AnchorLink domTree={domTree} />
      </div>
    </section>
  );
};

export default Widget;
