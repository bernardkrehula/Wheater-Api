const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months = ['Janurary', 'February', 'March', 'April', 'May'];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById('app');

const getWeather = async () => {
    try {
        const weatherDataFetch = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=24099d44ca382b6430e1195f0da1777b');
            method: 'GET'
            headers: {
                Accept: 'application/json'
            }
            const weatherData = await weatherDataFetch.json();
            console.log(weatherData)
            city.innerHTML = `${weatherData.name}`
            description.innerHTML = `${weatherData.weather[0].main}`;
            /* tempImg.innerHTML = `<img src=''>`; */
            temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}</h2>`;
            tempMax.innerHTML = `${weatherData.main.temp_max} C`;
            tempMin.innerHTML = `${weatherData.main.temp_min} C`;   
            
    }
    catch(error){
        console.log(error)
    }

}
getWeather()


