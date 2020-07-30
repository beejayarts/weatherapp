const key = 'lAINAFFm8gTXsMZUltxTHRp4XVpnYgB7';

//get weather information
const getWeather= async (cityid) => {
 const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
 const query = `${cityid}?apikey=${key}`;

 const response = await fetch(base+query);
 const data = await response.json();
 return data[0];
};


// Get city information
const getCity = async (city)=>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];                   
}

// getCity('manchester').then((data)=>{
//     return getWeather(data.Key);;
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// });
