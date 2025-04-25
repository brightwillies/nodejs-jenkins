import express from "express";

const port = 3000;
const app = express();


app.use(express.json());

app.get('/', (req, res)=>{
     res.send("Hello wordl");
});

app.listen(port, () => {
    console.log("server is running");
});
