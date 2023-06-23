import {
  countrySelect,
  regionSelect,
  countryInput,
  countrySuggestions,
  countryNamesCommon,
} from "../globals.js"
import { showAllBtnRef } from "./show-all-countries-button.js"
import showHide from "./show-hide.js"

export default function searchAutocomplete(newCountriesArraySorted) {
  const countryTitles = document.querySelectorAll("[data-country-name]")

  newCountriesArraySorted.forEach((country) => {
    countryNamesCommon.push(country.name.common)
  })
  countryInput.addEventListener("input", changeAutoComplete)
  countrySuggestions.addEventListener("click", selectItem)
  countrySuggestions.addEventListener("keypress", selectItem)

  function changeAutoComplete({ target }) {
    const data = target.value

    countrySuggestions.innerHTML = ``

    if (data.length) {
      const autoCompleteValues = autoComplete(data)
      autoCompleteValues.forEach((value) => {
        addItem(value)
      })
    }
    selectIndexZero()
    suggestions.setAttribute("aria-hidden", false)
  }

  function autoComplete(inputValue) {
    return countryNamesCommon.filter((value) =>
      value.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  function addItem(value) {
    const countrySuggestion = document.createElement("li")
    countrySuggestion.classList.add("suggestion")
    countrySuggestion.setAttribute("tabindex", "0")
    countrySuggestion.textContent = value

    countrySuggestions.append(countrySuggestion)
  }

  function selectItem({ target }) {
    const tagName = target.tagName || target.nodeName
    if (tagName === "LI") {
      countryInput.value = target.textContent

      countrySuggestions.innerHTML = ``

      countryTitles.forEach((title) => {
        showHide(title, countryInput.value)
      })
    }
    selectIndexZero()
    clearAutocomplete()
    showAllBtnRef()
  }
}

export function cancelAutocomplete() {
  document.addEventListener("click", () => {
    clearAutocomplete()
  })
  document.addEventListener("scroll", () => {
    clearAutocomplete()
  })
}

function clearAutocomplete() {
  countryInput.value = ""
  countrySuggestions.innerHTML = ``
  countrySuggestions.setAttribute("aria-hidden", true)
}

function selectIndexZero() {
  regionSelect.selectedIndex = 0
  countrySelect.selectedIndex = 0
}
