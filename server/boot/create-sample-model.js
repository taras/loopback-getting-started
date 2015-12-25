var RSVP = require('rsvp');
var denodeify = RSVP.denodeify;
var hash = RSVP.hash;

var coffeeshopFixtures = require('../fixtures/Coffeeshop');
var reviewerFixtures = require('../fixtures/Reviewer');
var makeReviews = require('../fixtures/Review').makeReviews;

module.exports = function(app) { 
 var DS = app.dataSources.postgresDS;
 var CoffeeshopModel = app.models.Coffeeshop;
 var ReviewerModel = app.models.Reviewer;
 var ReviewModel = app.models.Review;

 return hash({
   coffeeshops: create(DS, CoffeeshopModel, coffeeshopFixtures),
   reviewers: create(DS, ReviewerModel, reviewerFixtures)
 }).then(function(records){
   return create(DS, ReviewModel, makeReviews(records));
 }).catch(function(reason){
   console.error(reason);
 });
};

module.exports.create = create;

function create(DS, model, fixtures) {
  var _automigrate = denodeify(DS.automigrate.bind(DS));  
  var _create = denodeify(model.create.bind(model));
  
  return _automigrate(model.modelName)
    .then(function(){
      return _create(fixtures);
    });
}