// JavaScript Document

const url = "https://ifpb.github.io/ls/exams/prova-api/code/data/weather-forecast.json"
const forecasts = document.querySelector('.forecasts')


getPrevisao = () => {
		fetch(url)
			.then(res => res.json())
			.then(json => {
					//console.log(json);
					const html = `<div class="today">
		 <h2 class="city-name">${json.city}</h2>
        <h2 class="day">${json.forecasts[0].weekday}</h2>
        <h1 class="weather-name">${json.forecasts[0].weather.name}</h1>
        <div class="icon">
          <i class="wi ${json.forecasts[0].weather.wi}"></i>
        </div>
		
		<div class="weather">
          <div class="units">
            <div class="unit">
              <input type="radio" name="unit" id="celsius" value="celsius" checked>
              <label for="celsius">C</label>
            </div>
            <div class="unit">
              <input type="radio" name="unit" id="fahrenheit" value="fahrenheit">
              <label for="fahrenheit">F</label>
            </div>
          </div>
          <div class="weather-value">${json.forecasts[0].weather.celsius}</div>
          <div class="weather-degree">°</div>
        </div>
		  <div class="status">
          <div class="status-item humidity">
            <i class="wi wi-raindrop"></i>
            <span class="value">${json.forecasts[0].weather.humidity.max}%<br>${json.forecasts[0].weather.humidity.min}%</span>
          </div>
          <div class="status-item precip">
            <i class="wi wi-umbrella"></i>
            <span class="value">${json.forecasts[0].weather.precip.mm}mm<br>${json.forecasts[0].weather.precip.percent}%</span>
          </div>
          <div class="status-item wind">
            <i class="wi wi-strong-wind"></i>
            <span class="value">${json.forecasts[0].weather.wind.speed} km/h<br>${json.forecasts[0].weather.wind.direction}</span>
          </div>
          <div class="status-item sun">
            <i class="wi wi-day-haze"></i>
            <span class="value">${json.forecasts[0].weather.sun.sunrise} h<br>${json.forecasts[0].weather.sun.sunset} h</span>
          </div>
        </div>
		</div>
		${json.forecasts.filter((a) => json.forecasts.indexOf(a) > 0).map((item) => `<div class="forecast">
						<h1 class="weekday">${item.weekday}</h1>
						<i class="wi ${item.weather.wi}"></i>
						<div class="wc">
							<div class="weather-value max">${item.weather.celsius.max}°</div>
							<div class="weather-value min">${item.weather.celsius.min}°</div>
						</div>
						<div class="wf hidden">
							<div class="weather-value max">${toFahrenheit(item.weather.celsius.max)}°</div>
							<div class="weather-value min">${toFahrenheit(item.weather.celsius.min)}°</div>
						</div>
					  </div>`).join('') }`; 
		
		  
		forecasts.insertAdjacentHTML("afterbegin", html)
		
		const btncelsius = document.querySelector('#celsius')
		const btnfahrenheit = document.querySelector('#fahrenheit')
		const weather_value = document.querySelector('.weather-value')
	   	const weathers_celsius = document.querySelectorAll('.wc')
		const weathers_Fahrenheit = document.querySelectorAll('.wf')
		
		
		
		btncelsius.addEventListener('click', function(e) {
		
	 		let weather = weather_value.innerHTML
			  let temp = toCelsius(weather)
			  weather_value.innerHTML =  temp
			  //console.log(weathers_Fahrenheit)
			  //console.log(weathers_celsius)
			 weathers_Fahrenheit.forEach(f => f.classList.add('hidden'))
			 weathers_celsius.forEach(c => c.classList.remove('hidden'))
			 //$('.wf').addClass("hidden")
			 //$('.wc').removeClass('hidden')

		 })
		 
		 btnfahrenheit.addEventListener('click', function(e) {
	 		let weather = weather_value.innerHTML
			 let temp = toFahrenheit(weather)
			  weather_value.innerHTML =  temp
			  //console.log(weathers_Fahrenheit)
			  //console.log(weathers_celsius)
			  weathers_Fahrenheit.forEach(f => f.classList.remove('hidden'))
			  weathers_celsius.forEach(c => c.classList.add('hidden'))
			  
			 //$('.wc').addClass("hidden")
			 //$('.wf').removeClass('hidden')
		 })
	})
}




getPrevisao();

toCelsius = function(f)  {
  let C = (f - 32) / 1.8;
  return C.toFixed(0);
} 

toFahrenheit = function(c)  {
	
  let F = c * 1.8 + 32;
  return F.toFixed(0);
}