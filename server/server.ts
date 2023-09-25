import { resolve } from "path";

import express from "express";
import compression from "compression";
import * as helmet from "helmet";

import history from "./middleware/history-fallback";
import { Liveness, Readiness } from "./middleware/health-check";

import pkg from "../package.json";

const PORT = process.env.PORT || 8080;
const ROOT_DIR = resolve(__dirname, "../build");

const app = express();

app.use(compression());

app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.frameguard());
// app.use(helmet.contentSecurityPolicy());
app.use(helmet.xssFilter());

app.get("/health-check/liveness", Liveness);
app.get("/health-check/readiness", Readiness);

app.use(express.static(ROOT_DIR));
app.use(history("index.html", { root: ROOT_DIR }));

app.listen(PORT, function () {
  console.log(`${pkg.name}/${pkg.version} started on port ${PORT}`);
});
