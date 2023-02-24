fetch('https://restcountries.com/v3.1/all')
.then(Response => Response.json())
.then(data => displayCountries(data))


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    // ===============================forEach============================
    // countries.forEach(country => {
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = "country";
    //     countryDiv.innerHTML = `
    //         <h3 class="country-name">${country.name.common}</h3> 
    //         <h5>${country.capital}</h5>
    //         <img class="flags" src="${country.flags.png}">
    //     `;
    //     countriesDiv.appendChild(countryDiv);
    // });
    // =====================================================================
    
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        //  console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.className = "country";
        countryDiv.innerHTML = `
            <h3 class="country-name">${country.name.common}</h3> 
            <h5>${country.capital}</h5>
            <img class="flags" src="${country.flags.png}"><br>
            <button onclick="displayCountryDetails('${country.name.common}')">Details</button>
        `;
        // const name = document.createElement('h3');
        // name.innerText = country.name.common;
        // name.style.marginRight = '5px'
        // const capital = document.createElement('p');
        // capital.innerText = country.capital;
        // countryDiv.style.display = 'flex';
        // countryDiv.style.padding = '5px';
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);

        countriesDiv.appendChild(countryDiv);
    }
}



const displayCountryDetails = name => {
    

    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        countryInfo(data[0]);
    })
};

const countryInfo = country => {
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>Official Name: ${country.name.official}</h1>
        <h2>Area: ${country.area} sq km</h2>
        <h3>Population: ${country.population}</h3>
        <img src="${country.flags.png}">
    `;
}