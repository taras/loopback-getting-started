module.exports = function(app) {
  app.dataSources.postgresDS.automigrate('CoffeeShop', function(err) {
    if (err) throw err;
 
    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver', opens_at: 7, closes_at: 20},
      {name: 'Three Bees Coffee House', city: 'San Mateo', opens_at: 1, closes_at: 6},
      {name: 'Caffe Artigiano', city: 'Vancouver', opens_at: 20, closes_at: 24},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
};