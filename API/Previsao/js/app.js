// JavaScript Document

const cityInput = document.querySelector('#city-input')
const citiesDiv = document.querySelector('#cities')
const boxInfoCity = document.querySelector('#boxInfoCity')
const infoCity = `<span id="close" title='Fechar'>&#10006;</span><div id="infoCity"></div>`;
	
let cities = ["Rio de Janeiro", "São Paulo", "Belo Horizonte","Brasília","Belém","Salvador","Curitiba","Fortaleza","Manaus","João Pessoa"]

diaSemana = {
	'Mon' : 'Segunda',
	'Tue' : 'Terça',
	'Wed' : 'Quarta',
	'Thu' : 'Quinta',
	'Fri' : 'Sexta',
	'Sat' : 'Sábado',
	'Sun' : 'Domingo'

}

condicaoBr = {
    '0':  'tornado',                       // tornado
    '1':  'tempestade tropical',           // tropical storm
    '2':  'furacão',                       // hurricane
    '3':  'tempestade severa',             // severe thunderstorms
    '4':  'trovoadas',                     // thunderstorms
    '5':  'chuva e neve',                  // mixed rain and snow
    '6':  'chuva e granizo fino',          // mixed rain and sleet
    '7':  'neve e granizo fino',           // mixed snow and sleet
    '8':  'garoa gélida',                  // freezing drizzle
    '9':  'garoa',                         // drizzle
    '10': 'chuva gélida',                  // freezing rain
    '11': 'chuvisco',                      // showers
    '12': 'chuva',                         // showers
    '13': 'neve em flocos finos',          // snow flurries
    '14': 'leve precipitação de neve',     // light snow showers
    '15': 'ventos com neve',               // blowing snow
    '16': 'neve',                          // snow
    '17': 'chuva de granizo',              // hail
    '18': 'pouco granizo',                 // sleet
    '19': 'pó em suspensão',               // dust
    '20': 'neblina',                       // foggy
    '21': 'névoa seca',                    // haze
    '22': 'enfumaçado',                    // smoky
    '23': 'vendaval',                      // blustery
    '24': 'ventando',                      // windy
    '25': 'frio',                          // cold
    '26': 'nublado',                       // cloudy
    '27': 'muitas nuvens',         // mostly cloudy (night)
    '28': 'muitas nuvens',           // mostly cloudy (day)
    '29': 'parcialmente nublado',  // partly cloudy (night)
    '30': 'parcialmente nublado',    // partly cloudy (day)
    '31': 'céu limpo',             // clear (night)
    '32': 'ensolarado',                    // sunny
    '33': 'tempo bom',             // fair (night)
    '34': 'tempo bom',               // fair (day)
    '35': 'chuva e granizo',               // mixed rain and hail
    '36': 'quente',                        // hot
    '37': 'tempestades isoladas',          // isolated thunderstorms
    '38': 'tempestades esparsas',          // scattered thunderstorms
    '39': 'tempestades esparsas',          // scattered thunderstorms
    '40': 'chuvas esparsas',               // scattered showers
    '41': 'nevasca',                       // heavy snow
    '42': 'tempestades de neve esparsas',  // scattered snow showers
    '43': 'nevasca',                       // heavy snow
    '44': 'parcialmente nublado',          // partly cloudy
    '45': 'chuva com trovoadas',           // thundershowers
    '46': 'tempestade de neve',            // snow showers
    '47': 'relâmpagos e chuvas isoladas',  // isolated thundershowers
    '3200': 'não disponível'               // not available
}

getPrev = (city, type) => {
	
let url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}')&format=json`
	
	fetch(url)
	  .then(res => res.json())
	  .then(json => {
		let data = json.query.results.channel
		  
		if(type=="search"){
			info = document.querySelector('#infoCity')
			const html = `
				
				<p>${data.location.city}, ${data.location.region} - ${data.location.country}</p>
				<p class="descTemp">
					<img class="imgTemp" src="${getUrlImg(data.item.description)}"/> 
					<span class="condTemp">${toCelsius(data.item.condition.temp)} ºC ${condicaoBr[data.item.condition.code]}</span>
				</p>
				<div class="itensPrev">
					<p class="item">
						<span class="setaMin">&#10140</span>${toCelsius(data.item.forecast[0].low)}º<span class="setaMax">&#10140</span>${toCelsius(data.item.forecast[0].high)}º
					</p>
					<p class="item"><span>Sensação:</span>${toCelsius(data.wind.chill)}ºC</p>
					<p class="item"><span>Vento:</span>${toKm(data.wind.speed)}Km/h</p>
					<p class="item"><span>Humidade:</span>${data.atmosphere.humidity}%</p>
					<p class="item"><span>Pressão:</span>${toAtm(data.atmosphere.pressure)}atm</p>
					<p class="item"><span>Visibilidade:</span>${toKm(data.atmosphere.visibility)}Km</p>
				</div>
				<div class="itensSem">
					${data.item.forecast.map((d) => (data.item.forecast.indexOf(d) < 5) ? "<p><span class='day'>" + diaSemana[d.day] +"</span><span>"+toCelsius(d.high)+"º</span><span>"+toCelsius(d.low)+"º</span></p>" : '').join('')}
				</div>`;
			
			info.insertAdjacentHTML('beforeend', html);
		  }
		  else{
		  
		  const html = `<p class=desc><span class=temp>${toCelsius(data.item.forecast[0].low)}º</span><span class=temp>${toCelsius(data.item.forecast[0].high)}º</span><span class=nameCity>${city}</span></p>`
			
			citiesDiv.insertAdjacentHTML('beforeend', html);
			//console.log(json.query.results)
		  }
	})
}
 
 
 


cityInput.addEventListener('keypress', function(e) {
	 
   if (e.keyCode == 13) {
	   boxInfoCity.setAttribute("style", "display:block;");
  	   boxInfoCity.innerHTML = infoCity; 
	   let nameCity = cityInput.value;
       getPrev(nameCity, 'search') ;
	   const close = document.querySelector('#close')
	   close.addEventListener('click', function(e) {
	   		boxInfoCity.setAttribute("style", "display:none;")
 		})
    }

 })
 

getTempCapitais = (cities) =>{
	cities.forEach((city) => getPrev(city));
}

toCelsius = function(f)  {
  let C = (f - 32) * 5 / 9;
  return parseInt(C);
} 

toKm = function(mi)  {
  let k = mi * 1.61;
  return k.toFixed(2).replace(".",",");
}

toAtm  = function(mmHg)  {
  let a = mmHg * 1.32 * 0.001;
  return a.toFixed(2).replace(".",",");
}

getUrlImg = (desc) =>{
	let a = desc.split('.gif')[0]
	let b = a.split('http://')[1]
	return "http://" + b + ".gif"
}

getTempCapitais(cities)
