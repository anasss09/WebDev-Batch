// function apiCall(cityName) {
// 	let apikey = "5822f8f9c1ab503c9f6a22cb9955dae5";
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.get(
// 				`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
// 			)
// 			.then(({data}) => {
//                 let { lat, lon } = data[0];
// 		        console.log(lat, lon);
//                 axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`)
//                     .then(({data}) => {
//                         resolve(data)
//                     }).catch((err) => {
//                         reject(err)
//                     }) 
// 			})
// 			.catch((err) => {
// 				reject(err);
// 			});
// 	});
// }

// apiCall("Delhi")
// 	.then((data) => {
// 		console.log(data); // entire array
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

function getData(cityName) {
    let apikey = "5822f8f9c1ab503c9f6a22cb9955dae5";
    let geoCodingApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`
    return new Promise(async (resolve, reject) => {
        try{
            let {data} = await axios.get(geoCodingApi);
            data = data[0];
            const { lat, lon } = data;
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);
            console.log(res.data);
        }
        catch(err){
            alert(err)
        }   
    })
}

getData("Afganistan")
    .then((data)=>{
        console.log(data)
    })