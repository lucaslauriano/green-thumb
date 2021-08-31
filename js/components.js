import { formatMoney } from "./utils";

export const buttonBackTop = document.querySelector(".button-up");

export const selectSunlight = document.querySelector(".sunlight-select");
export const selectWater = document.querySelector(".water-select");
export const selectChew = document.querySelector(".chew-select");

export const noResults = document.querySelector(".no-results");
export const showResults = document.querySelector(".show-results");
export const list = document.querySelector(".list");

export const favoriteTag = (favorite) => {
  return favorite ? '<div class="favorite-tag">✨ Staff Favorite</div>' : "";
};

export const thumb = (data, className) => {
  return `<div class="${className}">
  ${favoriteTag(data.staff_favorite)}
    <div class="image">
      <img src="${data.url}" alt="Plant - ${data.name}" />
    </div>
    <div class="footer">
      <h1 class="title">${data.name}</h1>
      <div class="icons-price">
        <p class="price">${formatMoney(data.price)}</p>
      </div>
    </div>
  </div>
`;
};
