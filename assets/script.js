var searchHistory=[];
function weatherSearch(data) {
    // data.preventDefault()
var searchTerm = data
searchHistory.push(searchTerm) 
console.log(searchHistory, searchTerm);
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
rendersearchHistory ()

fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
    // console.log("Weather", response)
    return response.json();
})
.then(function(response){
    console.log(response)
    console.log("temp: "+response.main.temp)
    console.log("wind: "+response.wind.gust)
    console.log("visibility: "+response.visibility)
    renderData(response);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&appid=2cccf24439236510b904f1eae27b1030`)
    .then(function (response){
        return response.json();
    })
.then(function(uviData){
    console.log("This is your UVI data");
    console.log(uviData);
    document.querySelector("#uvi").value=uviData.current.uvi;
    var uviIndex=uviData.value;
    var backgroundcolor;
    if(uviIndex <=5 ) {backgroundcolor = "light green";
    document.querySelector("#uviIndex").setAttribute("style","background-color: light green;");
}
else if (uviIndex <= 10){backgroundcolor="purple";
document.querySelector("#uviIndex").setAttribute("class",backgroundcolor);
}

else if (uviIndex > 10){backgroundcolor="red";
document.querySelector("#uviIndex").setAttribute("class",backgroundcolor);
}
uvIndexEl.textContent=uviIndex;
})
    // .then(function(response){
    //     console.log(response, "this is UVI data");
    //     // generateData(response);
    // })
});
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
function rendersearchHistory(){
    var searchitems=localStorage.getItem("searchHistory")
    var HistoryContainer=document.querySelector(".searchHistory")
    HistoryContainer.innerHTML="";
    searchitems=(searchitems)? JSON.parse(searchitems):[];
for (var i=0; i<searchitems.length; i++){
var newBtn=document.createElement("div")
newBtn.innerHTML=`<button type="submit" class="cityBtn" id="citySearch">${searchitems[i]}</button>`
HistoryContainer.append(newBtn)
}

// var newBtn=document.createElement("button");
// newBtn.innerHTML=searchHistory
}
// var fivedayForecastObj=[];
// for (var i=0; 1< provideData.list.length; i++) {
//     if(i > 8 ===0){
//         fivedayforecastObj.push((            
function provideData(data){
    console.log("This is the data to provide data function", data);
    document.querySelector("#Temperature").value=data.list[8].main.temp.toFixed(1) + "°F";
    document.querySelector("#Humidityhealth").value=data.list[8].main.humidity +"%";
    document.querySelector("#Windgust").value=data.list[8].wind.gust + "MPH";
    document.querySelector("#icon").src=`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
    document.querySelector("#description").value=data.list[8].weather.description;
    document.querySelector("#Temperaturetwo").value=data.list[16].main.temp.toFixed(1) + "°F";
    document.querySelector("#Humidityhealthtwo").value=data.list[16].main.humidity +"%";
    document.querySelector("#Windgusttwo").value=data.list[16].wind.gust + "MPH";
    document.querySelector("#icontwo").src=`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
    // document.querySelector("#descriptiontwo").value=data.list[16].weather.description;
    document.querySelector("#Temperaturethree").value=data.list[24].main.temp.toFixed(1) + "°F";
    document.querySelector("#Humidityhealththree").value=data.list[24].main.humidity +"%";
    document.querySelector("#Windgustthree").value=data.list[24].wind.gust + "MPH";
    document.querySelector("#iconthree").src=`http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
    // document.querySelector("#descriptionthree").value=data.list[24].weather.description;
    document.querySelector("#Temperaturefour").value=data.list[32].main.temp.toFixed(1) + "°F";
    document.querySelector("#Humidityhealthfour").value=data.list[32].main.humidity +"%";
    document.querySelector("#Windgustfour").value=data.list[32].wind.gust + "MPH";
    document.querySelector("#iconfour").src=`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
    // document.querySelector("#descriptionfour").value=data.list[32].weather.description;
    document.querySelector("#Temperaturefive").value=data.list[39].main.temp.toFixed(1) + "°F";
    document.querySelector("#Humidityhealthfive").value=data.list[39].main.humidity +"%";
    document.querySelector("#Windgustfive").value=data.list[39].wind.gust + "MPH";
    document.querySelector("#iconfive").src=`http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png`;
    document.querySelector("#descriptionfive").value=data.list[39].weather.description;
    document.querySelector("#Todaysicon").src=`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
// }),
//         )}
}
function renderData(data){
  console.log("this is the data in render data function", data); 
  var unixDate = data.dt;
  var date = new Date(unixDate*1000)
  document.querySelector("#name").value=data.name +' ' + date
  document.querySelector("#Temp").value=data.main.temp.toFixed(1) + "°F";
  document.querySelector("#Wind").value=data.wind.gust + "MPH";
  document.querySelector("#Humidity").value=data.main.humidity +"%";
}

document.getElementById("searchBtn").addEventListener("click", function(){
    var searchTerm =document.querySelector("#searchTerm").value
    weatherSearch(searchTerm)});
// document.getElementById("citySearch").addEventListener("click", function(){
//         var searchTerm =document.querySelector("#citySearch").textContent
//         weatherSearch(searchTerm)});
//         console.log(searchTerm);
document.getElementbyId("citysearch").addEventListener("click", function(e){
    if(e.target && e.target.id=="citySearch"){
        var searchTerm =document.querySelector("#"+e.target.id).textContent
                weatherSearch(searchTerm)
                console.log(searchTerm);   
    
    }
})
    
// document.getElementById("cityBtn").addEventListener("click", weatherSearch)

var cityNameArr = ["searchTerm"];
var ls = JSON.parse(localStorage.getItem("city-list"));
var searchBtns = document.querySelector("#searchBtn");

if(!ls){console.log ("there is not localStorage");
} else{cityNameArr.push();
}

function submitForm(event){
    event.preventDefaullt();
    console.log("submitting form");
var cityEl = document.querySelector("#city-name");
var city = cityEl.value;
console.log("city is:", city);    
// }
// var currentDate=new Date();
// function getTodaysDate(date) {
//     var d = new Date(date),
//     month ="" + (d.getMonth() +1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();
//     return [month, day, year].join("/");
// }
// getElementById("searchBtn")
// .addEventListener('click', function (event) {
//     event.preventDefault()
//     let searchTerm = document.getElementById('searchTerm').value
//     let savedCities = document.getElementById('savedsearchTerm')
//     getWeather(city)
//     savedCities.insertAdjacentHTML("afterbegin", `<button type="button" class="button is-fullwidth mb-1" cityName="${searchTerm}" onclick="pushCity(this)">${searchTerm}</button>`)
//     localStorage.setItem('lastsearchTerm', city)
//     document.getElementById('searchError').textContent = ""

// }
// function displayDate(){
//    var currentDay = document.querySelector("#currentDay")
//    var currentDate= moment();
//    currentDay.textContent = currentDate.format("L")
//    return currentDay;
//     }
//     displayDate();

// text.setAttribute('src', response.data[0].text.fixed_height.url);
}