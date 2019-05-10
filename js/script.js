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

function showCountriesList(resp) {
	countriesList.innerHTML = '';
	resp.forEach(function(item){       
    	var tbody = document.createElement('tr');
		tbody.innerHTML = '<tr><td>' + '<img width="80" height="50" src="' + item.flag + '">   ' + item.name + '</td>' + '<td> capital  :  &nbsp </td>' + '<td>' + item.capital + '</td></tr>';
    	countriesList.appendChild(tbody);
	});
};
