import React, { useEffect, useState } from "react";
import "./styles/CodeBlock.scss";

import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.css";

export const CodeBlock = ({ desc, code }: { desc: string; code: string }) => {
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
