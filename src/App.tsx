import React from "react";
import "./App.scss";

import { ObjectExamples } from "./JsLearn/ObjectsArrays/Objects.tsx";
import { Subject } from "./JsLearn/Utils/Subject/Subject.tsx";
import { Example } from "./JsLearn/Utils/types/types.ts";
import { GeneralJsTrivia } from "./JsLearn/General/GeneralJsTrivia.ts";

export const App = () => {
  const eachSubjectsExamples: Record<string, Example[]> = {
    "Objects Trivia": ObjectExamples,
    // "General Js Trivia": GeneralJsTrivia
  };

  return (
    <div className="App">
      {Object.keys(eachSubjectsExamples).map((key) => (
        <Subject key={key} subject={key} examples={eachSubjectsExamples[key]} />
      ))}
    </div>
  );
};
