axios.get('https://randomuser.me/api/')
    .then(() => {
        console.log('Successful');
        
    }).catch((err) => {
        console.log(err);
        
    })