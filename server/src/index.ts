import express from "express";
import { mockRestaurants } from "../assets/mockRestaurants.ts";
import cors from "cors";

const PORT = 3000;

const app = express();
app.use(cors());

app.get("/restaurants", async (_req, res) => {
  await new Promise((r) => setTimeout(r, 2000));
  res.json(mockRestaurants);
});

app.get("/", (_req, res) => {
  res.json('I am alive')
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
