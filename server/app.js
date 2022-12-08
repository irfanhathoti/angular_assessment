const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())




const store = multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}${path.extname(file.originalname)}`)
    }
})


const upload = multer({
    storage:store,
    limits:{
        fileSize:40000
    }
})

app.use('/profile', express.static('upload/images'));
app.post("/upload", upload.single('profile'), (req, res,err) => {
    res.json({
        success: 1,
        profile_url: `http://localhost:8000/profile/${req.file.filename}`
    })
})

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler);

app.listen(8000,()=>{
    console.log("Server Started...........")
})