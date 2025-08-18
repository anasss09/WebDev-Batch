async function fetchData() {
    try{
        let {data} = await axios.get(`https://dev.to/api/articles`)
        let articles = data[Math.floor(Math.random() * data.length)];
        console.log(articles.description);
    } catch(err) {
        console.log(err);
        
    }
}

fetchData()

function fetchName() {
	return new Promise(async (resolve, reject) => {
		try {
			let { data } = await axios.get(`https://randomuser.me/api/`);
			let titleName = data.results[0].name.title;
			let firstName = data.results[0].name.first;
			let lastName = data.results[0].name.last;
			let fullName = `${titleName} ${firstName} ${lastName}`;
			console.log(fullName);

			let nameData = await axios.post(`/nameData`, { name: fullName });
            resolve(nameData);
            
		} catch (err) {
			reject(err);
		}
	});
}

fetchName().then((data) => {
    console.log(data);    
})
.catch((err) => {
    console.log(err);
})