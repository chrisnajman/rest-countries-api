import countryDetailBordersButtons from "./country-detail.js"
import { countryDetailModalOpen } from "./country-detail-modal.js"

export default function countryDetailButton(countries, country, countryItem) {
  const countryDetailBtn = countryItem.querySelector(
    "[data-country-detail-btn]"
  )

  countryDetailBtn.addEventListener("click", () => {
    countryDetailModalOpen()
    countryDetailBordersButtons(countries, country)
  })
}
