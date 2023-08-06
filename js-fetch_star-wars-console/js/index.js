console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log(data.results);
      console.log(`the eye color of R2-D2: ${data.results[2].eye_color}`);
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
