 var app = angular.module('mainApp',[]);
 app.controller('board',function($scope,$http){
 		$http.get('https://raw.githubusercontent.com/dhrubesh/fe/master/companies.json')
 		.success(function(response){
 			$scope.companies=response.Company;
 		});
 });