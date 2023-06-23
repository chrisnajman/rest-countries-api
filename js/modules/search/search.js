import searchAutocomplete, {
  cancelAutocomplete,
} from "./search-autocomplete.js"
import searchByCountry from "./search-by-country.js"
import searchByRegion from "./search-by-region.js"

export const countriesSelect = document.querySelectorAll(
  "[data-country-select]"
)
export const showAllBtn = document.querySelector("[data-show-all-btn]")

export default function countriesSearch(countries) {
  searchAutocomplete(countries)
  cancelAutocomplete()

  searchByCountry(countries)
  searchByRegion()
}
