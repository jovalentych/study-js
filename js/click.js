const btn = document.querySelector("#btn2"),
  overlay = document.querySelector(".overlay"),
  btns = document.querySelectorAll("button");

// btn.onclick = () => {
//   alert("click");
// };
// let i = 0;
const responceTarget = (event) => {
  //   console.log(event.target); --> currentTarget
  console.log(event.currentTarget);
  console.log(event.type);
  //   console.log("Hover");
  //   i++;
  //   if (i == 7) {
  //     btn.removeEventListener("click", responceTarget);
  //   }
};
// btn.addEventListener("click", responceTarget);
// btn.addEventListener("click", responceTarget);
btns.forEach((btn) => {
  btn.addEventListener("click", responceTarget);
});
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
});
