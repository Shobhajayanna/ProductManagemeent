angular.module('shoppingcart.product')
    .service('ProductService', ['$http', 'AppConstant',
     function($http, AppConstant){

        this.getProducts = function(){
            return $http
            .get(AppConstant.urls.product)
           
        };

       
        this.getProductDetails = function(){
            return $http
                        .get(AppConstant.urls.product)
                        .then(function(res){
                            return res.data;
                        }, function()
                        {
                            alert('some error happenned');
                        }
                       )

        };
        this.addProduct=function(ProductDetails){
            return $http.post(AppConstant.urls.product, ProductDetails);
        };

        this.getProductDetails = function(productId){
            return $http
                        .get(AppConstant.urls.product + '/' + productId)
                        .then(function(res){
                            return res.data;
                        }, function()
                        {
                            alert('some error happenned');
                        }
                       )

        };

    }]);
    