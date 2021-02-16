let contactCopy = document.querySelectorAll(".contact");
let info = document.querySelector(".hidden");

let copyText = (event) => {
  let textToCopy = event.target.getAttribute("data-copy");

  let temporaryInputElement = document.createElement("input");
  temporaryInputElement.type = "text";
  temporaryInputElement.value = textToCopy;

  document.body.appendChild(temporaryInputElement);

  temporaryInputElement.select();
  document.execCommand("Copy");

  document.body.removeChild(temporaryInputElement);

  info.classList.toggle("hidden");

  setTimeout(() => {
    info.classList.toggle("hidden");
  }, 1500);
};

contactCopy.forEach((element) => {
  element.addEventListener("click", copyText);
});
