import {
  selectChew,
  selectWater,
  buttonBackTop,
  selectSunlight,
} from "./components";

import Plants from "./Plants";

const init = () => {
  const plants = new Plants();

  const fetchPlants = (sun, water, pets, render) => {
    if ((sun, water, pets)) {
      const url = new URL(
        "https://front-br-challenges.web.app/api/v2/green-thumb/"
      );
      url.search = new URLSearchParams({ sun, water, pets }).toString();

      fetch(url)
        .then((response) => response.json())
        .then((data) => plants.setList(data))
        .catch((error) => error);
    }
  };

  let sun = selectSunlight.value;
  let water = selectWater.value;
  let pets = selectChew.value;

  selectSunlight.addEventListener("change", (event) => {
    sun = event.target.value;
    fetchPlants(sun, water, pets);
  });

  selectWater.addEventListener("change", (event) => {
    water = event.target.value;
    fetchPlants(sun, water, pets);
  });

  selectChew.addEventListener("change", (event) => {
    pets = event.target.value;
    fetchPlants(sun, water, pets);
  });

  buttonBackTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

window.addEventListener("load", init);
