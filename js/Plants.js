import { list, noResults, showResults, thumb } from "./components";
import { removeAll, orderBy } from "./utils";

class Plants {
  setNoResults() {
    noResults.style.display = "flex";
    showResults.style.display = "none";
  }

  setFirstThumb(data) {
    list.innerHTML += thumb(data, "first-thumb");
  }

  setThumb(data) {
    list.innerHTML += thumb(data, "thumb");
  }

  setList(data) {
    if (data) {
      noResults.style.display = "none";
      showResults.style.display = "block";
      removeAll(document.querySelectorAll("first-thumb"));
      removeAll(document.querySelectorAll("thumb"));
      const ordered = orderBy(data);
      ordered.forEach((el, index) => {
        index === 0 ? this.setFirstThumb(el) : this.setThumb(el);
      });
    } else {
      this.setNoResults();
    }
  }
}

export default Plants;
