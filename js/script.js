var app = angular.module('app', ['ui.bootstrap']);

app.controller('RecordsCtrl', function ($scope, $http) { 

  $scope.clusters = ['paas-dev', 'paas-prod', 'paas-build', 'caas-dev'];
  $scope.Records = [];
  
  $scope.loadRecords = function (cluster) {
    if (!$scope.Records[cluster]) {
      console.log('loading "' + cluster + '" Records');
      $http.get(cluster + '.json').then(function (response) {
        $scope.Records[cluster] = response.data;
      });
    }
  };
}); 



