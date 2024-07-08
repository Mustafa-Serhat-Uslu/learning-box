import React from "react";
import { CodeBlock } from "../Utils/CodeBlock.tsx";

type Example = {
  desc: string;
  code: string;
};

const ObjectExamples: Example[] = [
  {
    desc: "Object with keys will only take in to account the last key & value of key.",
    code: "const o = { M: { a: 1 }, M: { a: 99 } }; return o.M;",
  },
  {
    desc: "Object key type is always string.",
    code: "const o = { M: { a: 1 }, 'N': { a: 99 } }; return Object.keys(o).map((key) => typeof key);",
  },
];

export const Objects = () => {
  return (
    <div className="subject">
      <h3 className="subject-title">Objects Trivia</h3>
      {ObjectExamples.map((ex) => (
        <CodeBlock desc={ex.desc} code={ex.code} />
      ))}
    </div>
  );
};
