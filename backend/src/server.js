import express from "express"    
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import notesrouter from "./routes/notesRoutes.js"
import rateLimiter from "./middleware/ratelimiter.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors({
    origin:"http://localhost:5173",
}));

app.use(express.json()) // this middleware will parse JSON bodes : req.body


app.use(rateLimiter); // ratelimiter for indiviual ip 5 req per 10 sec



// it will listen to the request with match math routhe and fun the notesrouter function
app.use("/api/notes", notesrouter)


// this will first connect to database and start the server
connectDB().then(() => {

    app.listen(process.env.PORT,() => {
        
        console.log("server started on port:",process.env.PORT);
    })
    
})