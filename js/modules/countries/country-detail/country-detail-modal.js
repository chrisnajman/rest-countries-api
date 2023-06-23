import { countryDetail } from "../../globals.js"

// This is called inside event listener 'countryDetailBtn' in country-detail-button.js
// so no need for its own event listener.
export function countryDetailModalOpen() {
  countryDetail.showModal()
  countryDetail.setAttribute("aria-hidden", "false")
}

export function countryDetailModalBackdrop() {
  // modal backdrop
  countryDetail.addEventListener("click", (e) => {
    const modalDimensions = countryDetail.getBoundingClientRect()
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      countryDetail.close()
      countryDetail.setAttribute("aria-hidden", "true")
    }
  })
}

export function countryDetailModalClose() {
  const countryDetailModalCloseBtn = document.querySelector(
    "[data-country-detail-modal-close]"
  )
  countryDetailModalCloseBtn.addEventListener("click", () => {
    countryDetail.close()
    countryDetail.setAttribute("aria-hidden", "true")
  })
}
