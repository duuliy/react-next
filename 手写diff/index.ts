import diff from "./diff";

const before = [{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }];

const after = [{ key: "d" }, { key: "a" }, { key: "b" }, { key: "c" }];

console.log(diff(before, after));

// // 更新前
// const before = [
//   {key: 'a'}
// ]
// // 更新后
// const after = [
//   {key: 'd'}
// ]

// // 更新前
// const before = [
//   {key: 'a'},
//   {key: 'b'}
// ]
// // 更新后
// const after = [
//   {key: 'b'}
// ]