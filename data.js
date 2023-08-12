const element1 = document.getElementsByClassName("b1")[0];
const element2 = document.getElementsByClassName("b2")[0];
const element3 = document.getElementsByClassName("b3")[0];
const element4 = document.getElementsByClassName("b4")[0];
const element5 = document.getElementsByClassName("big")[0];
var color = "";
chnages made
element1.addEventListener("click", () => {
  color = element1.style.backgroundColor;
  change();
});
element2.addEventListener("click", () => {
  color = element2.style.backgroundColor;
  change();
});
element3.addEventListener("click", () => {
  color = element3.style.backgroundColor;
  change();
});
element4.addEventListener("click", () => {
  color = element4.style.backgroundColor;
  change();
});
function change() {
  element5.style.backgroundColor = color;
}
const p = document.createElement("h4");
p.innerText = "Hello";
element5.appendChild(<p>"jj"</p>);
// element.innerHTML = "la";
// element.addEventListener("click", () => {
//   console.log("im medium");
// });
// const p = document.createElement("h4");
// p.innerText = "Hello";
// element.appendChild("<p>djsadwa</p>");

// data.map((c) => {
//   const p = document.createElement("h4");
//   p.innerText = c;
//   element.append(p);
// });
// const React = (() => {
//   function useState(initval) {
//     let _val = initval;
//     let state = () => _val;
//     let setstate = (newval) => {
//       _val = newval;
//     };
//     return [state, setstate];
//   }
//   function render(Com) {
//     let C = Com();
//     C.render();
//     return C;
//   }
//   return { useState, render };
// })();

// function Component() {
//   const [count, setcount] = React.useState(1);
//   return {
//     render: () => {
//       console.log(count);
//     },
//     click: () => {
//       setcount(count + 1);
//     },
//   };
// }
// const z = React.render(Component);
// z.render();

// const rts = "yt";
// console.log({ rts });
// class Square {
//   constructor(w) {
//     this.width = w;
//     this.height = w;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }
// const sqe = new Square(4);
// console.log(sqe.height);
