//Export funkcedo action.js

export const apiCall = (link) =>
  fetch(link).then(response => response.json())