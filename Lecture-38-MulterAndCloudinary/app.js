const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const multer  = require('multer')
const datauri = require('datauri');
const cloudinary = require('cloudinary')
// const upload = multer({ dest: 'uploads/' })
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('index')
})

// Configuration
    cloudinary.config({ 
        cloud_name: 'dv0oplsjl', 
        api_key: '866452921593385', 
        api_secret: '0uWR679JyQKBlaeLuvmvYDvVQgU' // Click 'View API Keys' above to copy your API secret
    });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    ext = path.extname(file.originalname)
    cb(null, file.originalname + '-' + uniqueSuffix + ext)
  }
})

const upload = multer({ storage })

app.post('/upload' ,upload.single('image') , async (req,res) => {

    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           path.join(__dirname,req.file.path)
       )
       .catch((error) => {
           console.log(error);
       });
    //    console.log(uploadResult);
       
    // console.log(req.file)
    // let IMG_URI = parser.format(path.extname(req.file.originalname), req.file.buffer);
    // console.log(IMG_URI);

    res.send(`<img src="${uploadResult.url}" style="max-width: 1200px"/>`)
})       

app.listen(PORT, (req, res) => {
    console.log(`localhost:${PORT}`);
})
