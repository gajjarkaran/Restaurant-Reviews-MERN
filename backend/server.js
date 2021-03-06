import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express() //use this to make our server

app.use(cors())
app.use(express.json())

app.use("/api/restaurants", restaurants)
app.use("*", (req,res) => res.status(404).json({error: "not found"})) /* '*' = wild Clipboard, doesn't exist */

export default app