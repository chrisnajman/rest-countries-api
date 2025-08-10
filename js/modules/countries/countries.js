import countriesAll from "./countries-all.js"
import countriesSearch from "../search/search.js"

export default async function countries() {
  // const COUNTRIES_REST_API = "https://restcountries.com/v3.1/all"
  const COUNTRIES_REST_API =
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders"
  const loadingMessage = document.getElementById("loading-message")
  try {
    const response = await fetch(COUNTRIES_REST_API)

    loadingMessage.textContent = "Loading..."

    if (response.ok) {
      const countries = await response.json()
      const newCountriesArray = [...countries]
      const newCountriesArraySorted = newCountriesArray.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      )

      loadingMessage.textContent = ""

      countriesAll(newCountriesArraySorted)
      countriesSearch(newCountriesArraySorted)
    } else {
      console.log("Something went wrong...")
      loadingMessage.textContent =
        "Something went wrong. Please try again later..."
    }
  } catch (e) {
    console.log(e)
  }
}
