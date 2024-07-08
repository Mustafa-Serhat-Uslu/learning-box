import React, { useEffect, useState } from "react";
import "./styles/CodeBlock.scss";

import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";
import { Example } from "./types/types";

export const CodeBlock = ({ desc, code }: Example) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    Prism.highlightAll();

    try {
      const func = new Function(code);
      setResult(JSON.stringify(func()));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  }, [code]);

  if (code.length < 1) return undefined;

  return (
    <div className="code-block">
      <span className="description">{desc}</span>
      <pre className="code">
        <code className="language-javascript">
          {code.split("; ").join(";\n")}
        </code>
        <span className="result">{`\n\n` + result}</span>
      </pre>
    </div>
  );
};
