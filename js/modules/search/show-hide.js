export default function showHide(param, selectedValue) {
  if (param.textContent === selectedValue) {
    param.closest("[data-country-container]").classList.remove("hide")
    param.closest("[data-country-container]").setAttribute("aria-hidden", false)
  } else {
    param.closest("[data-country-container]").classList.add("hide")
    param.closest("[data-country-container]").setAttribute("aria-hidden", true)
  }
}
