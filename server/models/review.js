"use strict";

module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next){
    let req = context.req;
    req.body.date = Date.now();
    req.body.publishId = req.accessToken.userId;
    next();
  });
};
