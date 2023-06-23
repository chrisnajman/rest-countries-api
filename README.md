# REST Countries API

This completes the [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge at Frontend Mentor.

## The Challenge

My comments are in **bold**.

The challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it [as per] the designs.

Users should be able to:

- See all countries from the API on the homepage.

  - **Achieved**.

- Search for a country using an `input` field.

  - **Achieved**.

- Filter countries by region.

  - **Achieved**.

- Click on a country to see more detailed information on a separate page.

  - **Achieved** (but instead of a separate page, I've used a modal to display detail).

- Click through to the border countries on the detail page

  - **Achieved** (but with some outside help -- see **Credits**, below.)

- Toggle the color scheme between light and dark mode.

  - **Achieved**.

## Design Notes

A) The design for the home page shows all the flags displaying in the same aspect ratio. In fact, the flags have various aspect ratios. The designer has picked out only those flags which have the same ratio.

A decision had to be made. Either,

1. make the flag container the same aspect ratio as the majority of the flags (which involves cropping) and so preserving the design, or

2. allow each flag to be displayed in its correct aspect ratio, resulting in an irregular layout.

I chose the option 1 because I knew that I'd have the freedom to display each flag properly in the detail modal.

B) Each item on the home page must link to a detail view. However, the design doesn't clearly indicate that this is the case. My solution, the obvious one, was to add a 'View detail' button at the bottom of each item.

C) I chose to show the detailed view in a modal popup because I'm only using one html page and I'm not using a framework (e.g. React).

D) I added two more items that weren't in the specification/design:

1. I added a 'Filter by country' dropdown select list.

2. I added a 'Show all countries' button so that the user could get all countries back on the screen after they had made a selection.

E) I ignored the design where I felt it conflicted with usability. Examples include:

- The search filters are displayed not far removed from their default state.
- The theme toggle button is much more prominent than in the design.
- Each 'country card' has a 'View detail' button.
- In general, buttons, wherever they occur, are clearly demarcated as such (the user not being left to guess whether it is indeed a button or not).

## Accessibility

### Keyboard navigation

All items are navigable via the keyboard.

### Screen readers

- `ARIA` and `role` attributes are used where required.

## Credits

- I got into difficulties trying to work out the recursion of the borders buttons in the country detail modal. (Clicking on one of these buttons will not only load the target country's details, but also the corresponding borders buttons for that country). 'Talking' to [ChatGPT](https://chat.openai.com/) helped me to understand how recursion worked.
- The code for the 'Search for a country...' autocomplete input is a hacked-about version of a [script](https://stackoverflow.com/questions/71177851/how-to-make-autocomplete-in-javascript) by [Sarkar](https://stackoverflow.com/users/13741787/sarkar) (a StackOverflow contributor).
- Finally, I modified a [script](https://stackoverflow.com/questions/36676701/how-can-i-set-the-width-of-select-box-options) by [Ellipsis](https://stackoverflow.com/users/6766919/ellipsis) (another StackOverflow contributor) which demonstrated how to truncate extra-long text in the 'Filter by country' select dropdown.

## HTML

An HTML `template` is used to output the individual countries (index.html).

## CSS

- `grid` is used for the overall page layout as well as for the plan and add-ons steps.
- `flex` is used throughout.
- Responsive.

## Javascript

- ES6 modules
- ES6 (no transpilation to ES5)

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge
