import { useEffect, useState } from "react";
import idGenerator from "../utils/idGenerator";

const useGenerateDomTree = (mainWrapperRef) => {
  const [domTree, setDomTree] = useState(null);

  useEffect(() => {
    const target = mainWrapperRef?.current;

    function addDomTree(data, depth = 0) {
      return data.map(({ id, nodeName, children = [] }) => {
        const obj = {
          nodeName,
          href: id,
          children,
          id: idGenerator(),
          depth,
        };

        if (id === "widget") return null;

        if (children.length)
          obj.children = addDomTree(Array.from(children), depth + 1);
        return obj;
      });
    }

    const arr = addDomTree([target]);

    setDomTree(arr);
  }, [mainWrapperRef]);

  return { domTree };
};

export default useGenerateDomTree;
