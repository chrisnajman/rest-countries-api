import {
  countrySelect,
  regionSelect,
  countryInput,
  countrySuggestions,
} from "../globals.js"
import showAllCountriesButton, {
  showAllBtnRef,
} from "./show-all-countries-button.js"
import showHide from "./show-hide.js"

export default function searchByRegion() {
  const countryRegions = document.querySelectorAll("[data-country-region]")

  regionSelect.addEventListener("change", (e) => {
    const selectedValue = e.target.value
    if (selectedValue === "filter") return

    countryRegions.forEach((region) => {
      showHide(region, selectedValue)
    })

    showAllBtnRef()

    countrySelect.selectedIndex = 0
    countryInput.value = ""
    countrySuggestions.innerHTML = ``
  })

  showAllCountriesButton(countryRegions)
}
