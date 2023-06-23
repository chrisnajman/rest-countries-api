import setMultipleAttributes from "../utils/set-multiple-attributes.js"
import { countriesSelect, showAllBtn } from "./search.js"

export default function showAllCountriesButton(target) {
  const countryInput = document.getElementById("country-search")
  const countrySuggestions = document.getElementById("suggestions")

  showAllBtn.addEventListener("click", (e) => {
    target.forEach((name) => {
      name.closest("[data-country-container]").classList.remove("hide")
      name
        .closest("[data-country-container]")
        .setAttribute("aria-hidden", false)
    })

    setMultipleAttributes(e.target, {
      "aria-disabled": "true",
      disabled: true,
    })

    countriesSelect.forEach((select) => {
      select.selectedIndex = 0
    })
    countryInput.value = ""
    countrySuggestions.innerHTML = ``
  })
}

export function showAllBtnRef() {
  showAllBtn.setAttribute("aria-disabled", false)
  showAllBtn.removeAttribute("disabled")
}
