// JS for Development challenge 3
function changeStyleSheet(cssFile) {
  const linkElement = document.getElementById("cssLink");
  linkElement.href = cssFile;
}

function applyStyle(linkId, styleClass) {
  const link = document.getElementById(linkId);
  link.addEventListener("click", () => {
    changeStyleSheet(styleClass);
  });
}
applyStyle("link1", "/layout2.css");
applyStyle("link2", "/layout3.css");
applyStyle("link3", "/layout4.css");
