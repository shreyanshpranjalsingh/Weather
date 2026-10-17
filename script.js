const button =document.getElementById("Search-button")
const input = document.getElementById("city-input")
const citytime = document.getElementById("city-time")
 const citytemp = document.getElementById("city-temp")
const cityname = document.getElementById("city-name")


async function getdata(cityname) {
    const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=ee1298967c9e47dcba7155203261610&q=${cityname}&aqi=yes`)
    
    return await promise.json()
    }

button.addEventListener("click", async() => {
    const value =input.value
    const result = await getdata(value)
    cityname.innerText=`${result.location.name}, ${result.location.region},${result.location.country}`
    citytime.innerText=result.location.localtime
    citytemp.innerText=result.current.temp_c
   })