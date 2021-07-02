//var searchTerm =document.querySelector("#searchTerm").value 
//fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}id=cityid&appid=2cccf24439236510b904f1eae27b1030`)
function weatherSearch(event) {
    event.preventDefault()
var searchTerm =document.querySelector("#searchTerm").value
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("1st response")
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log(response.main.temp)
 })

 fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("1st response")
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log(response.list[32].main.temp)
 })
}
document.getElementById("searchBtn").addEventListener("click", weatherSearch);

// var responseContainer=document.querySelector("#response-container")

// var text = document.createElement("text");

// var cityFormEl = document.querySelector("#city-form");
// var cityInputEl = document.querySelector("#searchTerm");

// var formSubmitHandler = function(response){
//     responset.preventDefault();
//     console.log(response);  
// };
// cityFormEl.addEventListener("submit", formSubmitHandler);

// // get value from input element
// var cityname = cityInputEl.value.trim();

// if (cityname) {
//   response(cityname);
//   cityInputEl.value = "";
// } else {
//   alert("Please provide City name");
// }
// var displayResponse = function(city,searchTerm) {
//     console.log(city);
//     console.log(searchTerm);
//     // loop over repos
// for (var i = 0; i < city.length; i++) {
//     // format repo name
//     var cityName = city[i].value;
  
//     // create a container for each repo
//     var cityEl = document.createElement("div");
//     cityEl.classList = "list-item flex-row justify-space-between align-center";
  
//     // create a span element to hold repository name
//     var titleEl = document.createElement("span");
//     titleEl.textContent = cityName;
  
//     // append to container
//     cityEl.appendChild(titleEl);
  
//     // append container to the dom
//     cityContainerEl.appendChild(repoEl);
//   }
// }
// var reponseContainerEl = document.querySelector("#response-container");
// var citySearchTerm = document.querySelector("#city-search-term");

// // function displayDate(){
// //     var currentDay = document.querySelector("#currentDay")
// //    var currentDate= moment();
// //    currentDay.textContent = currentDate.format("dddd, MMMM Do YYYY")
// //    return currentDay;
// //     }
// //     displayDate();

// //text.setAttribute('src', response.data[0].text.fixed_height.url);
