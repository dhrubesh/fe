 var app = angular.module('mainApp',['ui.bootstrap']);
 app.controller('board',function($scope,$http){
 		$http.get('https://raw.githubusercontent.com/dhrubesh/fe/master/companies.json')
 		.success(function(response){
 			$scope.companies=response.Company;
 		});

 		var PaginationDemoCtrl = function ($scope) {
  $scope.viewby = 8;
  $scope.totalItems =20;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first paghe
}
};
 });