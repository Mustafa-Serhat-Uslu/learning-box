import { Example } from "../Utils/types/types";

export const ObjectExamples: Example[] = [
  {
    desc: "Object with keys will only take in to account the last key & value of key.",
    code: "const o = { M: { a: 1 }, M: { a: 99 } }; return o.M;",
  },
  {
    desc: "Object key type is always string.",
    code: "const o = { M: { a: 1 }, 'N': { a: 99 } }; return Object.keys(o).map((key) => typeof key);",
  },
  { desc: "", code: "",}
];
