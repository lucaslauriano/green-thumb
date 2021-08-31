export const fetchPlants = (sun, water, pets, render) => {
  if ((sun, water, pets)) {
    const url = new URL(
      "https://front-br-challenges.web.app/api/v2/green-thumb/"
    );
    url.search = new URLSearchParams({ sun, water, pets }).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => render(data))
      .catch((error) => error);
  }
};
