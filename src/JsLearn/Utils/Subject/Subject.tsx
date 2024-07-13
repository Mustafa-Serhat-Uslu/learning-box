import React from "react";
import { CodeBlock } from "../CodeBlock/CodeBlock.tsx";
import { Example } from "../types/types";

export const Subject = ({
  subject,
  examples,
}: {
  subject: string;
  examples: Example[];
}) => (
  <div className="subject">
    <h3 className="subject-title">{subject}</h3>
    {examples.map((ex, i) => (
      <CodeBlock key={i} desc={ex.desc} code={ex.code} />
    ))}
  </div>
);
