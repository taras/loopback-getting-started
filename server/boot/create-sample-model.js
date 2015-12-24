module.exports = function(app) {
  app.dataSources.postgresDS.automigrate('CoffeeShop', function(err) {
    if (err) throw err;
 
    app.models.CoffeeShop.create([
      {name: 'Bel Cafe', city: 'Vancouver', opensAt: 7, closesAt: 20},
      {name: 'Three Bees Coffee House', city: 'San Mateo', opensAt: 1, closesAt: 6},
      {name: 'Caffe Artigiano', city: 'Vancouver', opensAt: 20, closesAt: 24},
    ]);
  });
};