(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkLunch=function(){

    var name= $scope.name;
    var count=0;
    if(name==""){
      $scope.message="Please enter some value before pressing Check if too much";
    
      return;
    }

    var splitnames= name.split(",");
    for(var i=0;i<splitnames.length;i++){
      if(splitnames[i]==""){


      }else{
        count++;
      }

    }

    if(count<=3){
      $scope.message="Enjoy!";
      return;
    }else if(count>3){
      $scope.message="Too much!";
      return;
    }


  };


}

})();
