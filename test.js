const compareTriplets = (aRating, bRating) => {
  // ratins are zero initally.
  const resp = [0, 0];

  aRating.map((item, index) => {
    // checking who has the highest rating. adding point based on that.
    if (item > bRating[index]) {
      resp[0]++;
    } else if (item < bRating[index]) {
      resp[1]++;
    }
  });
  return resp;
};

console.log(compareTriplets([17, 28, 8], [99, 16, 8]));
