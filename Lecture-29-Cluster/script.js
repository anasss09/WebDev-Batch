const inpIMG = document.querySelector('.inpIMG')
const imgRen = document.querySelector('.imgRen')

inpIMG.onchange = function(ev) {
    console.log(ev.target.files[0].name);
    let file = ev.target.files[0];

    const options = {
    maxSizeMB: 1,
    }

    imageCompression(file, options).then(data => {
        console.log(data);        
    })

    // let img = document.createElement('img')
    // img.classList.add('imgClass')
    // img.src = URL.createObjectURL(ev.target.files[0].name);
    // imgRen.appendChild(img)

}