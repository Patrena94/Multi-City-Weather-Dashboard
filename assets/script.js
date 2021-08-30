var searchHistory=[];
if(localStorage.getItem("searchHistory")){
    searchHistory= JSON.parse(localStorage.getItem("searchHistory"))
}

rendersearchHistory()
function weatherSearch(data) {
var searchTerm = data
if(searchHistory.indexOf(data.toLowerCase()) == -1){
    searchHistory.push(searchTerm.toLowerCase()) 
}
console.log(searchHistory, searchTerm);
localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
rendersearchHistory ()

fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=2cccf24439236510b904f1eae27b1030&units=imperial`)
.then(function(response){
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
    var backgroundColor;
    if(uviIndex <= 5 ) {backgroundColor = "light green";
    document.querySelector("#uviIndex").setAttribute("style","backgroundColor: light green;");
}
else if (uviIndex <= 10){backgroundColor="purple";
document.querySelector("#uviIndex").setAttribute("class",backgroundColor);
}

else if (uviIndex > 10){backgroundColor="red";
document.querySelector("#uviIndex").setAttribute("class",backgroundColor);
}
uvIndexEl.textContent=uviIndex;
})
    
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
document.querySelectorAll(".cityBtn").forEach(index => {
    index.addEventListener("click", searchByBtn)
})
}

}
function searchByBtn() {
    var btnValue = this.textContent;
    weatherSearch(btnValue)
}
           
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

document.getElementbyId("citysearch").addEventListener("click", function(e){
    if(e.target && e.target.id=="citySearch"){
        var searchTerm =document.querySelector("#"+e.target.id).textContent
                weatherSearch(searchTerm)
                console.log(searchTerm);   
    
    }
})
    

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
}