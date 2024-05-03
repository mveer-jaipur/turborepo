import { value } from "@repo/common/config";
import express from "express";

const app = express();

console.log(value);

app.get('/', (req, res) => {
    res.json({
        message:   `I am express server ${value}`
    })
})

app.listen(3000)