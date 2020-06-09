(function(){
     angular.module('MyFirstAngularProject',[])
     controller('FirstController',function($scope){
            $scope.name=function(){
               return "Pasindu";
            };
     });
})();