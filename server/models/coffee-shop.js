

module.exports = function(CoffeeShop) {
    CoffeeShop.status = function(shopId, hour, cb) {
      CoffeeShop.findById( shopId, function (err, instance) {
          var opensAt = instance.opensAt;
          var closesAt = instance.closesAt;
          var response;
          if (hour > opensAt && hour < closesAt) {
            response = 'We are open for business.';
          } else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
          }
          cb(null, response);
      });
    };
  
  CoffeeShop.getName = function(shopId, cb) {
    CoffeeShop.findById( shopId, function (err, instance) {
        var response = 'Name of coffee shop is ' + instance.name;
        cb(null, response);
    });
  };
  
  CoffeeShop.remoteMethod ('getName', {
      http: {path: '/getname', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
      returns: {arg: 'name', type: 'string'}
    }
  );
  
  CoffeeShop.remoteMethod('status', {
      http: {path: '/status', verb: 'get'},
      accepts: [
        {arg: 'id', type: 'number', http: { source: 'query' }},
        {arg: 'hour', type: 'number', http: { source: 'query' } }
      ],
      returns: {arg: 'status', type: 'string'}
    }
  );
};
