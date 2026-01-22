let enter=document.querySelector(".search");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = "7d5e74e7b112e34001dc87b79a2fc7c3";
console.log(url,apikey);
let city=document.querySelector(".sicon");

async function weather(area){
    let response=await fetch(url+area+`&appid=${apikey}`)
    let data=await response.json();
    let p=document.querySelector("#place");
    let t=document.querySelector("#first");
    let h=document.querySelector(".text h1");
    let w=document.querySelector(".text2 h1");
    let s=document.querySelector(".starting");
    s.style.display="none";
    let photo=document.querySelector(".photo");
    let hum=document.querySelector(".humidity");
    let win=document.querySelector(".wind");
    let e=document.querySelector(".error");
    if (response.status==404){
        t.innerHTML="";
        e.style.display="block";
        photo.style.display="none";
        win.style.display="none";
        hum.style.display="none";
        p.innerHTML="INVALID CITY NAME";
        
    }
    else{
        photo.style.display="block";
        e.style.display="none";
        hum.style.display="flex";
        win.style.display="flex";
    p.innerHTML=data.name;
    t.innerHTML=data.main.temp+"'C";
    h.innerHTML=data.main.humidity+"%";
    w.innerHTML=data.wind.speed+"km/h";
    let x=data.weather[0].main;
    if (document.querySelector("#clouds").style.display =="block"){
        ddocument.querySelector("#clouds").style.display = "none";
    }
    else if(document.querySelector("#clear").style.display == "block"){
        document.querySelector("#clear").style.display = "none";
    }
    else if (document.querySelector("#rain").style.display = "block"){
        document.querySelector("#rain").style.display = "none"
    }
    else if(document.querySelector("#drizzle").style.display = "block"){
        document.querySelector("#drizzle").style.display = "none"
    }
    else if (document.querySelector("#mist").style.display = "block"){
        document.querySelector("#mist").style.display = "none"
    }
    else if(document.querySelector("#snow").style.display = "block"){
        document.querySelector("#snow").style.display = "none"
    }

    if (x == "Clouds") {
    document.querySelector("#clouds").style.display = "block";
    }
    else if (x == "Clear") {
        document.querySelector("#clear").style.display = "block";
    }
    else if (x == "Rain") {
        document.querySelector("#rain").style.display = "block";
    }
    else if (x == "Drizzle") {
        document.querySelector("#drizzle").style.display = "block";
    }
    else if (x == "Mist") {
        document.querySelector("#mist").style.display = "block";
    }
    else if (x == "Snow") {
        document.querySelector("#snow").style.display = "block";
    }
}
}
city.addEventListener("click",()=>{
    weather(enter.value);

})
