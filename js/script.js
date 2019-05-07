'use strict'

var url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
};

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
};

// function showCountriesList(resp) {
// 	countriesList.innerHTML = '';
// 	resp.forEach(function(item){
//     	var liEl = document.createElement('li');
//     	liEl.innerText = item.name;    	
//     	countriesList.appendChild(liEl);
// 	});
// };

function showCountriesList(resp) {
	countriesList.innerHTML = '';		
	resp.forEach(function(item){
		var thEL = document.createElement('th');
		thEL.innerText = item.name;
		countriesList.appendChild(thEL);
		var data = new FormData();
		data.append('name', capitalName);
		var tbody = document.createElement('tr');
			fetch(url + capitalName, {
				method: 'POST',
    			body: data,
			})
        	.then(function(resp) {
        	    return resp.json();
        	})
        	.then(showCountriesList);  			
	});
};

