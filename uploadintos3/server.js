const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const {v4: uuidV4} = require('uuid');
const { downloadFile, uploadFile } = require('./aws_s3');

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
// app.use(express.static(path.join(__dirname, "views")));
app.use(fileUpload());

app.get('/', (req, res) => {
    return res.render("index");
});

// app.get('/uploads/:Key', (req,res) => {
//     const key = req.params.Key;
//     const file = downloadFile(key);
//     file.pipe(res);
// });

app.post('/uploads', async(req, res) => {
    const file = req.files.uploadImage;
    const fileName = req.files.uploadImage.name;
    console.log(file);

    const filename = uuidV4() + '-' + fileName;
    const result = uploadFile(file.data, filename);
    console.log(result)
    // return res.redirect(`/uploads/${result.Key}`);
});

app.listen(3000, () => console.log(`server listening on ${3000}`));
