import express from "express"
import dotenv from "dotenv"
import db from "./config/dbConnect.js"
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { v2 as cloudinary } from 'cloudinary';
import cors from "cors"

const app = express()

dotenv.config()
db()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/posts', postRoutes)
app.use('/api/auth', userRoutes)

const port = process.env.PORT || 3001

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View Credentials' below to copy your API secret
});

app.listen(port, () => {
    console.log(`Server is started on ${port} port`);
})