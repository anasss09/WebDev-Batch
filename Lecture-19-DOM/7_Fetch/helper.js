function throttling(fun, delay) {
    let intialTime = 0;
    return function () {
        if(new Date().getTime() - intialTime >= delay) {
            intialTime = new Date().getTime()
            fun();
        }
    }
}
