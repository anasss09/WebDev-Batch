let id = setTimeout(function() {
    console.log("Hello World")
}, 4000, setTimeout(() => {
    clearTimeout(id)
}, 5000));

