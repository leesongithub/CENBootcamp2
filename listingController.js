angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.addListing = function(entry2) {

    $scope.listings.push({
      "name": entry2.name,
      "address": entry2.address,
      "coordinates.latitude": entry2.coordinates.latitude,
      "coordinates.longitude": entry2.coordinates.longitude,

    });

    };

    $scope.deleteListing = function(index) {

      $scope.listings.splice(index,1);

    };

    $scope.showDetails = function(index) {
		  var entry = $scope.listings[index];

      document.getElementById("entryName").innerHTML = entry.name;
      document.getElementById("entryAddress").innerHTML = entry.address;
      document.getElementById("entryRating").innerHTML = entry.numbers.rating;
      document.getElementById("entryCrowdedness").innerHTML = entry.numbers.crowdedness;

      document.getElementById("entryAttendance").innerHTML = entry.numbers.attendance;
      document.getElementById("entryCapacity").innerHTML = entry.numbers.capacity;

      document.getElementById("entryLat").innerHTML = entry.coordinates.latitude;
      document.getElementById("entryLong").innerHTML = entry.coordinates.longitude;


      elem.style.color = newColor;
    };

    $scope.calculateCrowdedness = function(index) {
      var entry = $scope.listings[index];

      document.getElementById("entryAttendance").innerHTML = entry.numbers.attendance;
      document.getElementById("entryCapacity").innerHTML = entry.numbers.capacity; 

      
    }
  }
]);
