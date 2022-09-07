const express = require('express');
const cors = require('cors');
const assert = require('assert');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
require('dotenv').config();
require('express-async-errors')
const fileUpload = require('express-fileupload')
const path = require('path');

// express
const app = express()

// route
const authRoute = require('./route/authRoute')
const imageRoute = require('./route/imageRoute')
const productRoute = require('./route/productRoute')

// configuration
app.use(cors());
app.use(cookieParser(process.env.REF_TOKEN_SECRET));
app.use(helmet());
app.use(fileUpload({
    useTempFiles: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/api/v1/auth`, authRoute)
app.use(`/api/v1/image`, imageRoute)
app.use(`/api/v1/product`, productRoute)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(`client/build`));
    app.get(`*`, (req, res) => {
        res.sendFile(path.join(__dirname + `/client/build/index.html`))
    })
}

const PORT = process.env.PORT || 7000;
const connectDB = require('./db')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`server is listening on port http://localhost:${PORT}`)
        })
    } catch (err) {
        throw err;
    }
}

start()