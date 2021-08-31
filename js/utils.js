export function formatMoney(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

export function removeAll(elements) {
  elements.forEach((el) => {
    el.remove();
  });
}

export function orderBy(list) {
  const ordering = list.sort((el) => {
    return el.staff_favorite ? -1 : 1;
  });

  return ordering;
}
