import * as data from './data.js';
import el from './dom.js';




window.addEventListener('load', () => {
    const input = document.querySelector('#location');
    const mainDiv = document.querySelector('#forecast');
    const todayDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');

    document.querySelector('#submit').addEventListener('click', getForecast)

    async function getForecast() {
       
        const locationName = input.value;
        const code = await data.getCode(locationName);

        const today = await data.getToday(code);
        const upcoming = await data.getUpcoming(code);

        const result = [
            await today,
            await upcoming
        ];

        console.log(result);
    }

});






function attachEvents() {

}

attachEvents();