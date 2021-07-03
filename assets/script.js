function weatherSearch(data) {
    data.preventDefault()
var searchTerm =document.querySelector("#searchTerm").value
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("1st response")
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log(response.main.temp)
    console.log(response.sys.visibility)
 })
 .then(function(response){
    console.log(response)
    console.log(response.list[40].wind)
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
.then(function(response){
    console.log(response)
    console.log(response.list[40].wind)
})
}
document.getElementById("searchBtn").addEventListener("click", weatherSearch)

var responseContainer=document.querySelector("#response-container")

var text = document.createElement("text");

var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#searchTerm");

var formSubmitHandler = function(response){
    responset.preventDefault();
    console.log(response);  
};

var formEl=document.querySelector("#search-form");
// formEl.addEventListener("submit", function(event)=>{
//     event.preventDefault();
//     console.log("submitting form");
var cityNameArr=[]
var ls=JSON.parse(localStorage.getItem("city-List"));
var cityBtns = document.querySelector("#city-btns");

if(!ls) {
    console.log ("there is no localstorage");
} else {cityNameArr.push();
}    
for (var i= 0; i < cityNameArr.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.innerText = cityNameArr[i];
    newBtn.addEventListener("click", function (event) {
        console.log(event.target.innerText);
    });
    cityBtns.append(newBtn);
}
function submitform(event){
    event.preventDefualt();
    console.log("submitting form");
var cityEl=document.querySelector("#city-name");
var city=cityEl.value;
console.log("city is:", city);    
}
// })
// var cityBtn=["City"]
// searchBtn.addEventListener("click", function () {
//     cityBtn.classList.remove("hide")
//     weatherSearch()
// })
// cityFormEl.addEventListener("weatherSearch", formSubmitHandler);

// get value from input element
var cityname = cityInputEl.value.trim();

if (cityname) {
  response(cityname);
  cityInputEl.value = "";
} else {
  alert("Please provide City name");
}
// function displayDate(){
//    var currentDay = document.querySelector("#currentDay")
//    var currentDate= moment();
//    currentDay.textContent = currentDate.format("L")
//    return currentDay;
//     }
//     displayDate();

// text.setAttribute('src', response.data[0].text.fixed_height.url);
