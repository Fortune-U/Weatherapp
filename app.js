alert("Javascript is enabled");

window.addEventListener('load', ()=> {
 
    let long;
    let lat;
    let timeZone = document.querySelector(".timezone");
    let temprature = document.querySelector(".temp");
    let  summary= document.querySelector(".weather-condition");
    let windSpeed = document.querySelector(".wind-deg");
    let locationIcon = document.querySelector(".weather-icon");

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
           long = position.coords.longitude;
           lat = position.coords.latitude;
           const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&limit=20&appid=06d31b27cf5436b39fef6ec8922bd42a`;
           
           fetch(api)
           .then(response => response.json())
           .then(data => { 
           console.log(data)
           const {temp,weather,wind_speed} = data.current;
           const tempC = temp - 273.15;
           temprature.textContent = tempC.toFixed([1]);
           const {icon,description} = data.current.weather[0];
           timeZone.textContent = data.timezone;
           summary.textContent = description;
           windSpeed.textContent = wind_speed;
           console.log(icon);
           locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
           })
           .catch(error => {
            console.error('Error:', error);
          });

       });

    
    }else {
        alert('location cannot be accessed');
    }
});