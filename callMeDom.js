console.log("loaded")

const logClick = () => console.log("click")
const logParam = (param) => console.log(param)

let count = 0;
const logTickOrTock = () => {
  count++;

  if (count % 2 === 0) {
    console.log("tock")
  } else {
    console.log("tick")
  }
}

window.addEventListener("load", () => {
  const rootElement = document.querySelector("#root")
  console.log(rootElement)

  rootElement.innerHTML = "lorem ipsum"

  rootElement.addEventListener("click", logClick)

  //window.addEventListener("click", () => logParam("logParam parameter"))

  setInterval(logTickOrTock, 1000)
})