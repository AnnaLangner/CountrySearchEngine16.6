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
        var thead = document.createElement('th');
        thead.innerHTML = '<tr><th>' + '<img width="80" height="50" src="' + item.flag + '">' + item.name + '<th><tr>'
    	var tbody = document.createElement('td');
		tbody.innerHTML = '<tr><td> capital </td>' + '<td> :  &nbsp' + item.capital + '</td></tr>';
    	countriesList.appendChild(thead);
        countriesList.appendChild(tbody);
	});
};
