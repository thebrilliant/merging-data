/* 
    app.js
    Angular application for the address book challenge
*/

"use strict";

//new angular module called Address Book
angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		//initializes a new variable with the list of employees in the address book
		$scope.employees = pawneeEmployees;

		//enables order by last name
		$scope.order = 'lastname';

		//function for sorting employees by given column
		$scope.sortBy = function (colName) {
			if($scope.sortCol == colName){
				$scope.sortReverse = !$scope.sortReverse;
			} else {
				$scope.sortReverse = false;
				$scope.sortCol =  colName;
			}
		};

		//function to tell whether or not a column has been sorted
		$scope.isSortedBy = function (colName) {
			return $scope.sortCol == colName;
		};

		//function for filtering employees

	});
