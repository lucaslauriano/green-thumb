import {
  noResults,
  selectChew,
  showResults,
  selectWater,
  buttonBackTop,
  selectSunlight,
} from "./components";

import Plants from "./Plants";
import { fetchPlants } from "./api";

const init = () => {
  const plants = new Plants();

  let sun = selectSunlight.value;
  let water = selectWater.value;
  let pets = selectChew.value;

  selectSunlight.addEventListener("change", (event) => {
    sun = event.target.value;
    const data = fetchPlants(sun, water, pets);
    plants.setList(data);
  });

  selectWater.addEventListener("change", (event) => {
    water = event.target.value;
    const data = fetchPlants(sun, water, pets);
    plants.setList(data);
  });

  selectChew.addEventListener("change", (event) => {
    pets = event.target.value;
    const data = fetchPlants(sun, water, pets);
    plants.setList(data);
  });

  buttonBackTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

window.addEventListener("load", init);
