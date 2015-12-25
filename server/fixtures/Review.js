var DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

module.exports.makeReviews = function makeReviews(records) {
  var coffeeshops = records.coffeeshops;
  var reviewers = records.reviewers;
  return [
    {
      date: Date.now() - (DAY_IN_MILLISECONDS * 4),
      rating: 5,
      comments: 'A very good coffee shop.',
      publisherId: reviewers[0].id,
      coffeeShopId: coffeeshops[0].id,
    },
    {
      date: Date.now() - (DAY_IN_MILLISECONDS * 3),
      rating: 5,
      comments: 'Quite pleasant.',
      publisherId: reviewers[1].id,
      coffeeShopId: coffeeshops[0].id,
    },
    {
      date: Date.now() - (DAY_IN_MILLISECONDS * 2),
      rating: 4,
      comments: 'It was ok.',
      publisherId: reviewers[1].id,
      coffeeShopId: coffeeshops[1].id,
    },
    {
      date: Date.now() - (DAY_IN_MILLISECONDS),
      rating: 4,
      comments: 'I go here everyday.',
      publisherId: reviewers[2].id,
      coffeeShopId: coffeeshops[2].id,
    }
  ];
}