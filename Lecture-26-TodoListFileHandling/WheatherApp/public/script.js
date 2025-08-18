const Weather_inp = document.querySelector('.Weather_inp')
const WDate = document.querySelector('.WDate')
const Wtemp = document.querySelector('.Wtemp')
const Wmonsoon = document.querySelector('.Wmonsoon')
const Wfeel = document.querySelector('.Wfeel')
const cloudIMG = document.querySelector('.cloudIMG')
const body = document.querySelector('body')

function Wheather_Data(cityName) {
    let apikey = "5822f8f9c1ab503c9f6a22cb9955dae5";
    let geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
    return new Promise(async (resolve, reject) => {
        try {
            let { data } = await axios.get(geoCodingApi);
            data = data[0];
            const { lat, lon } = data;
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);
            resolve(res.data);
        }
        catch (err) {
            console.log(err)
        }
    })
}

function temprature(cityName) {
    Wheather_Data(cityName).then((data) => {
        let tem = data.main.temp
        let celsuis = tem - 273
        let formatted = parseInt(celsuis) + "°C"
        Wtemp.innerText = formatted
    });
}

function dateTime(cityName) {
    Wheather_Data(cityName).then((data) => {
        let timetamp = data.dt
        let date = new Date(timetamp * 1000)
        let formatted = date.toUTCString();
        WDate.innerText = formatted

    })
}

function weatherCheck(cityName) {
    Wheather_Data(cityName).then((data) => {
        let weather = data.weather[0].main
        Wmonsoon.innerText = weather;
        if (weather == 'Clouds') {
            const img = document.createElement('img');
            img.src = '/photos/cloudy.jpg'; // replace with your image URL
            img.alt = 'Afghanistan image';
            img.width = 200;
            body.style.backgroundColor = '#858fbdff'

            cloudIMG.innerHTML = ""
            cloudIMG.appendChild(img)
        } else if (weather == 'Rain') {
            const img = document.createElement('img');
            img.src = '/photos/monsoon.jpg'; // replace with your image URL
            img.alt = 'Afghanistan image';
            img.width = 200;
            body.style.backgroundColor = '#111526ff'
            body.style.color = 'white'

            cloudIMG.innerHTML = ""
            cloudIMG.appendChild(img)
        } else if (weather == 'Clear') {
            const img = document.createElement('img');
            img.src = '/photos/sunny.jpg'; // replace with your image URL
            img.alt = 'Afghanistan image';
            img.width = 200;
            body.style.backgroundColor = 'skyblue'

            cloudIMG.innerHTML = ""
            cloudIMG.appendChild(img)
        }

    })
}

function FeelsLike(cityName) {
    Wheather_Data(cityName).then((data) => {
        let feels = data.main.feels_like
        let celsuis = feels - 273
        let formatted = parseInt(celsuis) + "°C"
        Wfeel.innerText = "Feels Like " + formatted
        // console.log("Feels" + formatted);

    });
}



Weather_inp.addEventListener('keydown', (ev) => {
    if (ev.key == 'Enter') {
        let cityName = Weather_inp.value;
        console.log(cityName);
        temprature(cityName)
        dateTime(cityName)
        weatherCheck(cityName)
        FeelsLike(cityName)



        // Weather_inp.value = ""
    }

})

