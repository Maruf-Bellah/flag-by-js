/* const loadCountries = () =>{
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => displayCountries(data))
}
const displayCountries = countries =>{
     console.log(countries[0]);
     const countriesHTML = countries.map(country => getCountryHMTL(country));
     // console.log(countriesHTML);
     const country = document.getElementById('countries');
     country.innerHTML = countriesHTML.join(' ');

}
// option 1
/* const getCountryHMTL =country =>{
     const {name, flags} = country;
     return`
          <div class="country">
          <h2>${name.common}</h2>
          <img src="${flags.png}">
          </div>
     `
} */
// option 2
/* const getCountryHMTL = ({name, flags, area , region}) =>{
     return`
          <div class="country">
          <h2>${name.common}</h2>
          <p>Area : ${area}</p>
          <p>Content : ${region}</p>
          <img src="${flags.png}">
          </div>
     ` 
} 
/* // original 
const getCountryHMTL =country =>{
     return`
          <div class="country">
          <h2>${country.name.common}</h2>
          <p>Area : ${country.area}</p>
          <img src="${country.flags.png}">
          </div>
     `
} 

loadCountries(); */

const firstFech = () => {
     fetch('https://restcountries.com/v2/all')
     .then(res => res.json())
     
     .then(data => displayCountries(data))
}

const displayCountries = country => {
     console.log(country);
     const countriesHTML = country.map(country => getCountryHMTL(country));
     // console.log(countriesHTML);
     const divCountriy = document.getElementById('countries');
     divCountriy.innerHTML = countriesHTML.join(" ");
}
const getCountryHMTL = ({name, flags, region}) => {
     // console.log(country);
     // const {name, flags , region} = country;
     return `
          <div class="country">
          <p>${name}</p>
          <p>${region}</p>
          <img src="${flags.svg}">
          </div>
     `
}
firstFech()
