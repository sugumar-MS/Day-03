
const API_URL = "https://restcountries.com/v3.1/all"
console.log(API_URL)
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    //this.responseText;
    console.log(countriesData);
    for (let ind =0; ind < countriesData.length; ind++) {
        console.log(countriesData[ind].flags.png);
    }
} 