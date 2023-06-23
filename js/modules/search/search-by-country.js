import {
  countrySelect,
  regionSelect,
  countryInput,
  countrySuggestions,
  countryNamesCommon,
} from "../globals.js"
import showAllCountriesButton, {
  showAllBtnRef,
} from "./show-all-countries-button.js"
import showHide from "./show-hide.js"

export default function searchByCountry(newCountriesArraySorted) {
  const countryNames = document.querySelectorAll("[data-country-name]")

  newCountriesArraySorted.forEach((country) => {
    countryNamesCommon.push(country.name.common)
  })

  countryNamesCommon.forEach((name) => {
    const countrySelectOption = document.createElement("option")
    countrySelectOption.setAttribute("value", name)
    countrySelectOption.textContent = name

    if (name.length > 30) {
      countrySelectOption.textContent =
        countrySelectOption.textContent.substring(0, 30) + "..."
    }
    countrySelect.append(countrySelectOption)
  })

  countrySelect.addEventListener("change", (e) => {
    const selectedValue = e.target.value
    if (selectedValue === "") return

    countryNames.forEach((name) => {
      showHide(name, selectedValue)
    })

    showAllBtnRef()

    regionSelect.selectedIndex = 0
    countryInput.value = ""
    countrySuggestions.innerHTML = ``
  })

  showAllCountriesButton(countryNames)
}
