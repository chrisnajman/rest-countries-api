export default function setMultipleAttributes(element, attributesToSet) {
  for (let i in attributesToSet) {
    element.setAttribute(i, attributesToSet[i])
    // i is the attribute(s)
    // [i] is the attribute value(s)
  }
}

/*
 ** USAGE EXAMPLES **
 Note that hyphenated attributes, e.g. "data-border-btn" or "aria-disabled", must be written as strings.

 class: "class-name" can also be set.

 class: "class-name-1 class-name-2" - multiple classes.

country-details.js 
====================
newBordersBtn.setAttribute("type", "button")
newBordersBtn.setAttribute("data-border-btn", "")
newBordersBtn.classList.add("button", "borders-button")

 setMultipleAttributes(newBordersBtn, {
  type: "button",
  "data-border-btn": "", 
 })


 show-all-countries.js 
 ======================

e.target.setAttribute("aria-disabled", true)
e.target.setAttribute("disabled", true)

setMultipleAttributes(newBordersBtn, {
    type: "button",
    "data-border-btn": "",
    class: "button borders-button",
})




*/
