import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Logger from "./lib/logger";
import {connectToMongoDB} from "./db/config";
import decodeJWT from "./middleware/decode-jwt";

require('dotenv').config();

const PORT = process.env.PORT;
if (!PORT)
    throw new Error('No PORT specified');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connectToMongoDB().catch((e) => {
    throw e
});

app.get('/is-alive', decodeJWT, (req, res) => {
    res.status(200).json({
        message: 'Server is alive'
    });
});

// 404 - Not Found Error
app.use(function (_, res) {
    res.status(404).json({
        message: "API not found",
    });
});

app.listen(PORT, async () => {
    Logger.success(`Server started on port ${PORT}`);
    Logger.info(`http://localhost:${PORT}`);
});
