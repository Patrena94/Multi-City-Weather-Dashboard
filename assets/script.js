
//var searchTerm =document.querySelector("#searchTerm").value 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}id=cityid&appid=2cccf24439236510b904f1eae27b1030`)
var searchTerm =document.querySelector("#searchTerm").value
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("1st response",response)
    return response.json();
})
.then(function(response){
    console.log("2nd response",response);
})
var responseContainer=document.querySelector("#response-container")

var text = document.createElement("text");

// function displayDate(){
//     var currentDay = document.querySelector("#currentDay")
//    var currentDate= moment();
//    currentDay.textContent = currentDate.format("dddd, MMMM Do YYYY")
//    return currentDay;
//     }
//     displayDate();

//text.setAttribute('src', response.data[0].text.fixed_height.url);
