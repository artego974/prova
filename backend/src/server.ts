import express from "express"
import cors from "cors"
import { AppDataSource } from "./config/data-source"
import routes from "./routes/index"

const app = express()
const port = 3000

app.use(cors({origin:"http://localhost:5173",
methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "UPDATE"]}))
app.use(express.json())

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    app.use(routes)
    app.listen(port, ()=>{
        console.log("server rodando na porta",port)
    })
})