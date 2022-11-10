const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  points: document.getElementsByClassName("point"),
  box: document.getElementById("big-black-box"),
};
console.log(DOMSelectors.button);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerContent = "This is now a big red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  Array.prototype.forEach.call(DOMSelectors.points, (point) => {
    console.log(point);
  });
}
changeLi();
