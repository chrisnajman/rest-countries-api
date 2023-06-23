import { noData } from "../globals.js"

import countryDetailButton from "./country-detail/country-detail-button.js"

export default function countriesAll(countries) {
  const countryTemplate = document.getElementById("country-template")
  const countriesContainer = document.getElementById("countries-all")
  countries.forEach((country) => {
    const countryItem = countryTemplate.content.cloneNode(true)
    const countryContainer = countryItem.querySelector(
      "[data-country-container]"
    )
    const countryImg = countryItem.querySelector("[data-country-img]")
    const countryName = countryItem.querySelector("[data-country-name]")
    const countryPop = countryItem.querySelector("[data-country-population")
    const countryReg = countryItem.querySelector("[data-country-region")
    const countryCap = countryItem.querySelector("[data-country-capital")

    let id = country.population

    countryContainer.dataset.countryId = id
    countryName.textContent = country.name.common
    countryImg.src = `${country.flags.png}`
    countryImg.alt = `${country.flags.alt}`
    countryPop.textContent = country.population.toLocaleString("en-GB")
    countryReg.textContent = country.region

    if (country.capital) {
      countryCap.textContent = country.capital.join(", ")
    } else {
      countryCap.textContent = noData
    }
    countryDetailButton(countries, country, countryItem)

    countriesContainer.appendChild(countryItem)
  })
}
