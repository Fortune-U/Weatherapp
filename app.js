window.addEventListener('load', ()=> {

    let long;
    let lat;
    let timeZone = document.querySelector(".timezone");
    let temprature = document.querySelector(".temp");
    let summary= document.querySelector(".weather-condition");
    let windSpeed = document.querySelector(".wind-deg");
    let ctntemp = document.querySelector(".ctn-temp");
    let ctnUvi = document.querySelector(".uvi");
    let ctnHumidity = document.querySelector(".humidity");
    //
    let locationIcon = document.querySelector(".weather-icon");
    let secondIcon = document.querySelector(".second-icon");
    let thirdIcon = document.querySelector(".third-icon");
    let fourthIcon = document.querySelector(".fourth-icon");
    let fifthIcon = document.querySelector(".fifth-icon");
    let sixthIcon = document.querySelector(".sixth-icon");
    let seventhIcon = document.querySelector(".seventh-icon");
    //Forecast
    let listOne = document.querySelector(".li-one");
    let listTwo = document.querySelector(".li-two");
    let listThree = document.querySelector(".li-three");
    let listFour = document.querySelector(".li-four");
    let listFive = document.querySelector(".li-five");
    let listSix = document.querySelector(".li-six");
    let listSeven = document.querySelector(".li-seven");
    //Days
    let dayOne = document.querySelector(".day-one");
    let dayTwo = document.querySelector(".day-two");
    let dayThree = document.querySelector(".day-three");
    let dayFour = document.querySelector(".day-four");
    let dayFive = document.querySelector(".day-five");
    let daytSix = document.querySelector(".day-six");
    let daySeven = document.querySelector(".day-seven");

    let darkMode =localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('.toggle-mode');
    

    const enableDarkMode = () => {
       document.body.classList.add("darkmode");
       

       localStorage.setItem('darkmode','enabled');
    };
    const disableDarkMode = () => {
      document.body.classList.remove("darkmode");

      localStorage.setItem('darkmode', null);
   };

   if(darkMode === 'enabled'){
      enableDarkMode();
   }

darkModeToggle.addEventListener('click',() => {
   darkMode = localStorage.getItem('darkMode');
   if(darkMode !== "enabled"){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
})

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition((position,error) =>{
        
           long = position.coords.longitude;
           lat = position.coords.latitude;
           const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&limit=20&appid=06d31b27cf5436b39fef6ec8922bd42a`;
    
           fetch(api)
           .then(response => response.json())
           .then(data => { 
           console.log(data)
           const {temp,weather,wind_speed,humidity,uvi} = data.current;
           const tempC = temp - 273.15;
           temprature.textContent = tempC.toFixed([1]);
           ctntemp.textContent = tempC.toFixed([1]);
           ctnUvi.textContent = uvi;
           ctnHumidity.textContent = humidity;
           const {icon,description} = data.current.weather[0];
           timeZone.textContent = data.timezone;
           summary.textContent = description;
           windSpeed.textContent = wind_speed;
           console.log(icon);
           locationIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
           forecastday();
        
           function forecastday(){
        const {daily} = data;
        let getDay = ['sun','mon','tue','wed','thur','fri','sat'];
        let days = {
        'sun': daily[0],
        'mon': daily[1],
        'tue': daily[2],
        'wed': daily[3],
        'thur': daily[4],
        'fri': daily[5],
        'sat': daily[6]};
       
        //temprature forecast days
       // listOne.textContent = (days.sun.temp.day - 273.15).toFixed([1]);
        listTwo.textContent = (days.mon.temp.day - 273.15).toFixed([1]);
        listThree.textContent = (days.tue.temp.day - 273.15).toFixed([1]);
        listFour.textContent = (days.wed.temp.day - 273.15).toFixed([1]);
        listFive.textContent = (days.thur.temp.day - 273.15).toFixed([1]);
        listSix.textContent = (days.fri.temp.day - 273.15).toFixed([1]);
        listSeven.textContent = (days.sat.temp.day - 273.15).toFixed([1]);

        //Days forecast function calls
       // dayone();
        daytwo();
        daythree();
        dayfour();
        dayfive();
        daysix();
        dayseven();


        //days forecast functions
        // function dayone(){
        //     let unix_timestamp = data.daily[0].dt;
        //     var date = new Date(unix_timestamp * 1000);
        //     var day = getDay[date.getUTCDay()];
        //     console.log(day);
        //     dayOne.textContent = day;
            
        // }
        
        function daytwo(){
            let unix_timestamp = data.daily[1].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            dayTwo.textContent = day;
            const{icon} = data.daily[1].weather[0];
            secondIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
           // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
        }
        function daythree(){
            let unix_timestamp = data.daily[2].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            const{icon} = data.daily[2].weather[0];
            thirdIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
            dayThree.textContent = day;
            // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
         }
        function dayfour(){
            let unix_timestamp = data.daily[3].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            const{icon} = data.daily[3].weather[0];
            fourthIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
            dayFour.textContent = day;
           // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
        }
        function dayfive(){
            let unix_timestamp = data.daily[4].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            const{icon} = data.daily[4].weather[0];
            fifthIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
            dayFive.textContent = day;
           // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
        }
        function daysix(){
            let unix_timestamp = data.daily[5].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            const{icon} = data.daily[5].weather[0];
            sixthIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
            daytSix.textContent = day;
           // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
        }
        function dayseven(){
            let unix_timestamp = data.daily[6].dt;
            var date = new Date(unix_timestamp * 1000);
            var day = getDay[date.getUTCDay()];
            console.log(day);
            const{icon} = data.daily[6].weather[0];
            seventhIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
            daySeven.textContent = day;
           // .innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"/>`;
        }

        
     }


           })
           .catch(error => {
            console.error('Error:', error);
          });

       });
       

    
    }else {alert('location cannot be accessed');}
});