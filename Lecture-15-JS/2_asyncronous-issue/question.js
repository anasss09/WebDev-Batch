function download(cb) {
    console.log("Download Starts ")

    setTimeout(function() {
        console.log("Download finish");
        cb(upload);
    }, 2000);
}

function compress(cb) {

    console.log("Compress strats")

    setTimeout(function() {
        console.log("Compress Finish");
        cb();
    }, 2000);
}

function upload() {

    console.log("Upload starts")

    setTimeout(function() {
        console.log("upload ends");
    }, 2000);

}

download(compress)