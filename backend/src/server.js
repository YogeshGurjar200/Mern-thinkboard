import express from "express"    
import cors from "cors"
import dotenv from "dotenv"
import path from "path"

import connectDB from "./config/db.js"
import notesrouter from "./routes/notesRoutes.js"
import rateLimiter from "./middleware/ratelimiter.js";

const app = express();

dotenv.config();

const __dirname = path.resolve()

// Middleware
if (process.env.NODE_ENV !== "production"){

    app.use(cors({
        origin:"http://localhost:5173",
    }));
} 

app.use(express.json()) // this middleware will parse JSON bodes : req.body


app.use(rateLimiter); // ratelimiter for indiviual ip 5 req per 10 sec



// it will listen to the request with match math routhe and fun the notesrouter function
app.use("/api/notes", notesrouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist","index.html"))
})
}
// this will first connect to database and start the server
connectDB().then(() => {

    app.listen(process.env.PORT,() => {
        
        console.log("server started on port:",process.env.PORT);
    })
    
})