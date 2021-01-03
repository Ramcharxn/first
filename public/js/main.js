const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')

const getInfo =async (event)=>{
    event.perventDefault();
    let cityVal = cityName.value;

    if(cityVal === " "){
        city_name.innerHTML = `please enter the city name before search`
    } 
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=97b97844b001ae5847d55c14c431cd88`;
        const response =await fetch(url);  
        console.log(response)
        }
        catch{
            city_name.innerHTML = `please enter the city name properly`
        }
    }
}

submitBtn.addEventListener('click',getInfo)