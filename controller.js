 var app = angular.module('mainApp',[]);
 app.controller('board',function($scope,$http){
 		$http.get('/companies.json')
 		.success(function(response){
 			$scope.companies=response.Company;
 		});
 });