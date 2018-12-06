angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [
        {
            "name": "Regal Cinemas Royal Park 16", 
            "numbers": {
                "capacity": 2500,
                "attendance": 1500,
                "rating": 4.2,
                "crowdedness": 1500/2500
            },
            "coordinates": {
                "latitude": 30, 
                "longitude": -82
            }, 
            "address": "3702 W Newberry Road, Gainesville, FL 32611, United States"
        }, 
        { 
            "name": "Regal Butler Town Center 14", 
            "numbers": {
                "capacity": 2000,
                "attendance": 1400,
                "rating": 4.4,
                "crowdedness": 1400/2000
            },
            "coordinates": {
                "latitude": 29, 
                "longitude": -83
            }, 
            "address": "3101 SW 35th Boulevard, Gainesville, FL 32611, United States"
        }, 
        {
            "name": "Regal Celebration Pointe 10 & RPX", 
            "numbers": {
                "capacity": 3000,
                "attendance": 2000,
                "rating": 4.7,
                "crowdedness": 2000/3000
            },
            "coordinates": {
                "latitude": 28, 
                "longitude": -82
            }, 
            "address": "4901 SW 31 Place, Gainesville, FL 32611, United States"
        }, 
        { 
            "name": "Reitz Union Theater", 
            "numbers": {
                "capacity": 200,
                "attendance": 80,
                "rating": 4.5,
                "crowdedness": 80/200
            },
            "coordinates": {
                "latitude": 33, 
                "longitude": -84
            }, 
            "address": "Reitz Union, Gainesville, FL 32612, United States"
        }, 
        {
            "name": "Client Theater 1",
            "numbers": {
                "capacity": 2500,
                "attendance": 1000,
                "rating": 4.5,
                "crowdedness": 1000/2500
            },
            "coordinates": {
                "latitude": 30, 
                "longitude": -85
            }, 
            "address": "100 Imaginary Road, Gainesville, FL 32611, United States"
        }, 
        {
            "name": "Client Theater 2", 
            "numbers": {
                "capacity": 3500,
                "attendance": 2800,
                "rating": 5.0,
                "crowdedness": 2800/3500
            },
            "coordinates": {
                "latitude": 27, 
                "longitude": -81
            }, 
            "address": "200 Imaginary Road, Gainesville, FL 32611, United States"
        }]
    };

    return listings.entries;
});
