const values = [5];

// const temp = values.map((c) => console.log(c));
const test = ["a", "b", "c", "a"];
const [x, y] = test;
console.log(y);
console.log(Array.from(new Set(["a", "b", "c", "a"])));
console.log(Array.of("a", "x", "v"));
// test.fill(undefined);
// const g = new Array(7);
// console.log(g);
// const arr = [7, 2, 3, 4];
// const t = new Array(0, 3);
// const y = console.log(t);
// const l = undefined;
// if (l) {
//   console.log("true");
// } else {
//   console.log(false);
// }

// const file = fs.createWriteStream("./big.file");
// file.write("helo");
// read = fs.createReadStream("./big.file");
// read.on("data", function (c) {
//   console.log(c.toString());
// });

// fs.readFile("./big.file", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// values.sort(function (x, y) {
//   if (x > y) return 1;
//   if (x < y) return -1;
//   return 0;
// });

// setTimeout(() => console.log(array), 1000);
