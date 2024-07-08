import React from "react";
import { CodeBlock } from "../Utils/CodeBlock.tsx";

export const ObjectsArrays = () => {
  return (
    <div className="subject">
      <h3 className="subject-title">ObjectsArrays</h3>
      <CodeBlock
        desc={"Object with multiple properties with same key will only take in to account the last property."}
        code="const o = { M: { a: 1 }, M: { a: 99 } }; return o.M;"
      />
    </div>
  );
};
