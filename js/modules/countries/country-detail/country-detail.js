import setMultipleAttributes from "../../utils/set-multiple-attributes.js"
import { countryDetail, noData } from "../../globals.js"

export default function countryDetailBordersButtons(countries, country) {
  const countryDetailImg = countryDetail.querySelector(
    "[data-country-detail-img]"
  )
  const countryDetailCommonName = countryDetail.querySelector(
    "[data-country-detail-common-name]"
  )
  const countryDetailOfficialName = countryDetail.querySelector(
    "[data-country-detail-official-name]"
  )
  const countryDetailNativeName = countryDetail.querySelector(
    "[data-country-detail-native-name]"
  )
  const countryDetailPopulation = countryDetail.querySelector(
    "[data-country-detail-population]"
  )
  const countryDetailRegion = countryDetail.querySelector(
    "[data-country-detail-region]"
  )
  const countryDetailSubRegion = countryDetail.querySelector(
    "[data-country-detail-sub-region]"
  )
  const countryDetailCapital = countryDetail.querySelector(
    "[data-country-detail-capital]"
  )
  const countryDetailTld = countryDetail.querySelector(
    "[data-country-detail-tld]"
  )
  const countryDetailCurrencies = countryDetail.querySelector(
    "[data-country-detail-currencies]"
  )
  const countryDetailLanguages = countryDetail.querySelector(
    "[data-country-detail-languages]"
  )
  const countryDetailBorders = countryDetail.querySelector(
    "[data-country-detail-borders]"
  )

  // Flag
  countryDetailImg.src = `${country.flags.png}`
  countryDetailImg.alt = `${country.flags.alt}`

  // Common Name
  countryDetailCommonName.textContent = country.name.common

  // Official Name
  countryDetailOfficialName.textContent = country.name.official

  // Native Name
  if (country.name.nativeName) {
    const nativeNameKeys = Object.keys(country.name.nativeName)
    if (nativeNameKeys.length > 0) {
      const firstKey = nativeNameKeys[0]
      countryDetailNativeName.textContent =
        country.name.nativeName[firstKey].common
    } else {
      countryDetailNativeName.textContent = noData
    }
  }

  // Population
  countryDetailPopulation.textContent =
    country.population.toLocaleString("en-GB")

  // Region
  countryDetailRegion.textContent = country.region

  // Sub Region
  if (country.subregion) {
    countryDetailSubRegion.textContent = country.subregion
  } else {
    countryDetailSubRegion.textContent = noData
  }

  // Capital
  if (country.capital) {
    countryDetailCapital.textContent = country.capital
  } else {
    countryDetailCapital.textContent = noData
  }

  // Top Level Domain
  if (country.tld) {
    countryDetailTld.textContent = country.tld[0]
  } else {
    countryDetailTld.textContent = noData
  }

  // Currencies
  if (country.currencies) {
    const currenciesKeys = Object.keys(country.currencies)
    const currenciesArray = []
    currenciesKeys.forEach((key) => {
      currenciesArray.push(country.currencies[key].name)
      countryDetailCurrencies.textContent = currenciesArray.join(", ")
    })
  } else {
    countryDetailCurrencies.textContent = noData
  }

  // Languages
  if (country.languages) {
    const languagesKeys = Object.keys(country.languages)
    const langArray = []
    languagesKeys.forEach((key) => {
      langArray.push(country.languages[key])
      countryDetailLanguages.textContent = langArray.join(", ")
    })
  } else {
    countryDetailLanguages.textContent = noData
  }

  // Border countries
  const borders = country.borders
  countryDetailBorders.textContent = ""

  // Generate borders buttons for relevant countries
  if (borders && borders.length > 0) {
    // This is something like a react fragment. It has no DOM value. Just
    // something you can put code in. Helps with repaint.
    const fragment = document.createDocumentFragment()

    borders.forEach((border) => {
      // const newBordersBtn = document.createElement("button")

      // setMultipleAttributes(newBordersBtn, {
      //   type: "button",
      //   "data-border-btn": "",
      //   class: "button borders-button",
      // })

      // 110825 - replace btn with span (as border countries no longer clickable)
      const newBordersBtn = document.createElement("span")
      newBordersBtn.classList.add("border-country")

      newBordersBtn.textContent = border

      // 110825 - Commented this out because 'cca3' is (was?) a field but when I define it in
      // COUNTRIES_REST_API, fields= the API fails.
      // countries.forEach((ctry) => {
      //   if (ctry.cca3 === newBordersBtn.textContent) {
      //     newBordersBtn.textContent = ctry.name.common
      //   }
      // })

      // 110825 - remove event listener as button no longer working:
      // Event listener for each new border country button
      // newBordersBtn.addEventListener("click", () => {
      //   // Call the function recursively to populate the popup and update border countries buttons for the clicked new border country
      //   const newBorderCountry = countries.find(
      //     (country) => country.name.common === newBordersBtn.textContent
      //   )
      //   // console.log(newBorderCountry) // logs undefined
      //   if (newBorderCountry) {
      //     // Like fragment, requestAnimationFrame helps with repaint.
      //     window.requestAnimationFrame(() => {
      //       // function  called recursively so that each time a new country
      //       // loaded, all the border buttons are clickable
      //       // Got help for this from ChatGPT
      //       countryDetailBordersButtons(countries, newBorderCountry)
      //     })
      //   }
      // })

      fragment.appendChild(newBordersBtn)
    })

    window.requestAnimationFrame(() => {
      countryDetailBorders.appendChild(fragment)
    })
  } else {
    countryDetailBorders.textContent = noData
  }
}
