const ratingForm = document.querySelector("#rating-form");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRating = document.querySelector("#selected-rating");

function getSelectedRating() {
  const chosen = document.querySelector('input[name="rating"]:checked');

  if (chosen === null) {
    return null;
  }

  return Number(chosen.value);
}

function buildRatingText(rating, total = 5) {
  return rating + " out of " + total;
}

function handleSubmit(event) {
  event.preventDefault();

  const rating = getSelectedRating();

  if (rating === null) {
    return;
  }

  selectedRating.textContent = buildRatingText(rating);

  ratingForm.hidden = true;
  thankYouState.hidden = false;
}

ratingForm.addEventListener("submit", handleSubmit);