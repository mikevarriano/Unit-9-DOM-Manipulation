const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  box: document.getElementById("#big-black-box"),
};
console.log(DOMSelectors.button);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerContent = "This is now a big red box";
  text.style.fontSize = "40px";
}
backgroundAndText(DOMSelectors.box, DOMSelectors.text);

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
