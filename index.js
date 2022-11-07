const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  background: document.querySelector("#big-black-box"),
};
console.log(DOMSelectors.button);

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
  text.style.fontSize = "40px";
}
backgroundAndText(DOMSelectors.background, DOMSelectors.text);
