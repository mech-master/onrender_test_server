import React from "react";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "errorhandler";
import express, {urlencoded} from "express";
import hbs from "hbs";
import helmet from "helmet";
import ignoreStyles from "ignore-styles";
import logger from "morgan";
import { renderToString } from "react-dom/server";

import App from "../client/App";


const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;


//Создание сервера
const app = express();
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "views"))
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser())
app.use(helmet({
    contentSecurityPolicy: isProduction,
    crossOriginOpenerPolicy: isProduction,
    crossOriginResourcePolicy: true,
    originAgentCluster: isProduction,
    referrerPolicy: true,
    strictTransportSecurity: true,
    xContentTypeOptions: true,
    xDnsPrefetchControl: true,
    xDownloadOptions: true,
    xFrameOptions: true,
    xPermittedCrossDomainPolicies: true,
    xPoweredBy: true,
    xXssProtection: true
}));
app.use(cors());
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.status(200).render(
        "index",
        {
            html:renderToString(
                <App />
            )
        }
    )
})

app.listen(
    PORT,
    () => console.log(`Server was running on the port: ${PORT}`)
)