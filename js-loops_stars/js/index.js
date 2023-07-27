console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 0;
function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let star = 1; star <= 5; star++) {
    const imgElement = document.createElement("img");
    imgElement.src =
      star <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    imgElement.addEventListener("click", () => {
      filledStars = star;
      renderStars();
    });

    starContainer.append(imgElement);
  }

  //--^-- your code here --^--
}

renderStars();
