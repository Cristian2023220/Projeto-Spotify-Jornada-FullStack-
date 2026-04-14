import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = process.env.ALLOWED_ORIGIN 
  ? process.env.ALLOWED_ORIGIN.split(',').map(origin => origin.trim())
  : ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.get("/", (request, response) => {
  response.send('Só criamos o endpoint "/artists" até agora');
});

app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

export default app;