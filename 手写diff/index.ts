import diff from "./diff";

const before = [{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }];

const after = [{ key: "d" }, { key: "a" }, { key: "b" }, { key: "c" }];

console.log(diff(before, after));
