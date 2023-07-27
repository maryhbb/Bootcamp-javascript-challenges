console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let srat = 1; srat <= 5; srat++) {
    const imgElement = document.createElement("img");

    //version1 to creat img
    // imgElement.setAttribute("src", "assets/star-empty.svg");

    //version2 to creat img
    imgElement.src = "assets/star-empty.svg";
    starContainer.append(imgElement);
  }
  console.log("Number of stars rendered:", starContainer.children.length);

  //--^-- your code here --^--
}

renderStars();
