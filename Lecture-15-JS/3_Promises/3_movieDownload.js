function downloadMovies(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let exe = url.split("/").pop().split(".").pop();

            if(exe != "mp4") {
                reject("Invalid link ")
            } else {
                resolve(url.split("/").pop());
            }
        }, 2000);
    })
}

downloadMovies("myurl.com/avanger.mp4")
.then(function(movie){ 
    console.log(movie, " Downloaded")
})
.catch(function(err) {
    //for throwing Error
    //throw new Error("Invalid Link")
    console.log("Invalid link")
})