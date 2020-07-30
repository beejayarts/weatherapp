


// ------my Weather app 

const cityForm= document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

cityForm.addEventListener('submit', e=>{
   //prevent default action of refreshing
   e.preventDefault();

   //get city value
   const city = cityForm.city.value.trim();
   cityForm.reset();

   //update  ui with new city
   updateCity(city).then((data)=>{
      updateUI(data);
   }).catch((error)=>{
      console.log(error.message);
   });


})

const updateCity = async (randomcity)=>{
   //these call the functions in forecast.js and return their promises
   const cityDetails= await getCity(randomcity);
   const weatherDetails= await getWeather(cityDetails.Key);

   return {
      citydetails: cityDetails,
      weather: weatherDetails

   };

}

const updateUI=(data)=>{
   //collecting and assigning data
   const cityDets = data.citydetails;
   const cityweather = data.weather;
   

   //update details template
   details.innerHTML=`
   <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${cityweather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${cityweather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
       
      </div>
   `;

   //update icons
   const iconsrc= `weathericons/${cityweather.WeatherIcon}.svg`
   icon.setAttribute('src', iconsrc);

   //update day/night icon & image
   let timeSrc =cityweather.IsDayTime? 'weathericons/day.svg':'weathericons/night.svg';
   // if(cityweather.IsDayTime){
   // timeSrc='weathericons/day.svg';
   // }else{
   //    timeSrc='weathericons/night.svg';
   // };
    time.setAttribute('src',timeSrc);


   //remove the d-none class if present
   if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
   }
};




   
   
   