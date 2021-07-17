function weatherSearch(data) {
    data.preventDefault()
var searchTerm =document.querySelector("#searchTerm").value
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("Weather")
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log("temp: "+response.main.temp)
    console.log("wind: "+response.wind.gust)
    console.log("visibility: "+response.visibility)
    renderData(response);
})

 fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    console.log("Forecast response")
    return response.json();

})
.then(function(response){
    console.log(response)
    provideData(response); 
})
}
function provideData(data){
    console.log("This is the data to provide data function", data);
    document.querySelector("#Temperature").value=data.list[0].main.temp
    document.querySelector("#Humidityhealth").value=data.list[0].main.humidity
    document.querySelector("#Windgust").value=data.list[0].wind.gust
    document.querySelector("#icon").src=data.list[0].weather[0].icon
    
    // document.querySelector("#name").city.name;
}
function renderData(data){
  console.log("this is the data in render data function", data); 
  document.querySelector("#name").value=data.name
  document.querySelector("#Temp").value=data.main.temp;
  document.querySelector("#Wind").value=data.wind.gust;
  document.querySelector("#Humidity").value=data.main.humidity;
//   document.querySelection("#name").value=data.name;
}

document.getElementById("searchBtn").addEventListener("click", weatherSearch)
var cityNameArr = ["searchTerm"];
var ls = JSON.parse(localStorage.getItem("city-list"));
var cityBtns = document.querySelector("#city-btns");

if(!ls){console.log ("there is not localStorage");
} else{cityNameArr.push();
}

function submitForm(event){
    event.preventDefaullt();
    console.log("submitting form");
var cityEl = document.querySelector("#city-name");
var city = cityEl.value;
console.log("city is:", city);    
}
var currentDate=new Date();
function getTodaysDate(date) {
    var d = new Date(date),
    month ="" + (d.getMonth() +1),
    day = "" + d.getDate(),
    year = d.getFullYear();
    return [month, day, year].join("/");
}
// })
// var cityBtn=["City"]
// searchBtn.addEventListener("click", function () {
//     cityBtn.classList.remove("hide")
//     weatherSearch()
// })
// cityFormEl.addEventListener("weatherSearch", formSubmitHandler);

// get value from input element
// var cityname = cityInputEl.value.trim();

// if (cityname) {
//   response(cityname);
//   cityInputEl.value = "";
// } else {
//   alert("Please provide City name");
// }
// function displayDate(){
//    var currentDay = document.querySelector("#currentDay")
//    var currentDate= moment();
//    currentDay.textContent = currentDate.format("L")
//    return currentDay;
//     }
//     displayDate();

// text.setAttribute('src', response.data[0].text.fixed_height.url);
