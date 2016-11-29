(()=>{
let app = angular.module('drinkUp'); 

    app.service('BeerService', function($http){
    var bs = this

      bs.getAll=(query, cb)=>{
        var url = '' + query + '&withBreweries=Y';
        var apiUrl = url + encodeURIComponent(url);
           $http.get(apiUrl)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
           }
})

})();