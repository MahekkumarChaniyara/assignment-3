var target=document.getElementById("main");
target.style.display="flex";
fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json").then(x=>x.json())
.then((result)=>{
    console.log(result);
    var count=0;
    result.forEach(function(x){
        if(count<3){
            var newelement=`<div id="cardname${count}" class="cardname"><div class="showncardcityname"><input class="cityname" id="cityname${count}" value="${x.cityName}" disabled ><input class="apidate" id="apidate${count}" value="${x.tourDate}" disabled ><input class="category" id="category${count}" value="${x.category}" disabled ></div><div class="avg-temp"><h5 style="font-size:0.9em">Average Temperature</h5><h2><span>+</span>${x.temp}<span style="font-size:0.9em">&#8451;</span><span style="color:rgb(244, 208, 63);margin-left:5px">&#x2600;</span></h2></div><div class="imagespecial"><img class="cityimg" src="${x.cityImg}"></img></div><div class="showprice"><span class="totalpriceshow">Total Price:</span><br><span>${x.price}</span></div><button class="more">Explore</button></div>`
            target.insertAdjacentHTML("beforeend",newelement);
            count++;
        }
    })

}).catch(error=>console.log(error));


//<div><div class="totalprice"><span class="price">Total Price:</span><div class="showprice">${x.price}</div></div><button class="exmore">Explore</button></div>