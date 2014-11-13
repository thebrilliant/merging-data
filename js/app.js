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
	});
