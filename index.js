var target=document.getElementById("main");
target.style.display="flex";
var now=new Date();
var day=now.getDay();
var month=now.getMonth();
var datalist=document.getElementById("citysee");
var inputcity=document.getElementById("cities");
var numtemp=document.getElementById("tempnumber");
var showcity=document.getElementById("showcityname");
var showcountry=document.getElementById("showcountryname");
document.getElementById("showdate").innerHTML=now.getDate();
var arrDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var arrMonth=["January","February","March","April","May","Janu","July","August","September","October","November","December"]
arrDay.forEach(function(z,index){
    if(day==index){
        document.getElementById("showday").innerHTML=z;
    }
});


arrMonth.forEach(function(y,index){
    if(month==index){
        document.getElementById("showmonth").innerHTML=y;
    }
})
document.getElementById("showyear").innerHTML=now.getFullYear();
function load(){
    
}

window.onload=load;


fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json").then(x=>x.json())
.then((result)=>{
    console.log(result);
    var count=0;
    result.forEach(function(x){
            var newelement=`<div id="cardname${count}" class="cardname"><div class="showncardcityname"><input class="cityname" id="cityname${count}" value="${x.cityName}" disabled ><input class="apidate" id="apidate${count}" value="${x.tourDate}" disabled ><input class="category" id="category${count}" value="${x.category}" disabled ></div><div class="avg-temp"><h5 style="font-size:0.9em">Average Temperature</h5><h2><span>+</span>${x.temp}<span style="font-size:0.9em">&#8451;</span><span style="color:rgb(244, 208, 63);margin-left:5px">&#x2600;</span></h2></div><div class="imagespecial"><img class="cityimg" src="${x.cityImg}"></img></div><div class="showprice"><span class="totalpriceshow">Total Price:</span><br><span>${x.price}</span></div><button class="more">Explore</button></div>`
            target.insertAdjacentHTML("beforeend",newelement);
            count++;
    })

}).catch(error=>console.log(error));


//<div><div class="totalprice"><span class="price">Total Price:</span><div class="showprice">${x.price}</div></div><button class="exmore">Explore</button></div>

var citylist=[];
fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json").then(res=>res.json()).then(respod=>{
respod.city.forEach(function(z){
        citylist.push(z.name);
})

optionadd(citylist);
}).catch(err=>console.log(err));


function optionadd(arrcityname){
    for(let i=0;i<arrcityname.length;i++){
        var datalistchild=`<option value="${arrcityname[i]}"></option>`;
        datalist.insertAdjacentHTML("beforeend",datalistchild);
    }
}

var city=inputcity.value;
var api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9a2ecb08a03c4efc56a4050642bd1279`

showingtemp(api,city);

function mytemp(d){
    var city=d.value;
    var api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9a2ecb08a03c4efc56a4050642bd1279`

    showingtemp(api,city);
}

// fetch("https://api.openweathermap.org/data/2.5/weather?q=Rajkot&units=metric&appid=9a2ecb08a03c4efc56a4050642bd1279")

function showingtemp(api,city){
    fetch(`${api}`).then(res=>res.json()).then(respon=>{
        console.log(respon);
        numtemp.innerHTML=`${Math.round(respon.main.temp)}&deg`;
        showcity.innerHTML=city;
        showcountry.innerHTML=respon.sys.country;
    }).catch(errr=>console.log(errr));
    
}



