export const ratingDivide = (rating) => {
  rating = Math.round(rating) / 2;
  return rating;
};