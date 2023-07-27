console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let star = 1; star <= 5; star++) {
    const imgElement = document.createElement("img");

    //version1 to create img
    // imgElement.setAttribute("src", "assets/star-empty.svg");

    //version2 to create img
    // imgElement.src = "assets/star-empty.svg";

    imgElement.src =
      star <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    starContainer.append(imgElement);
  }

  //--^-- your code here --^--
}

renderStars(4);
