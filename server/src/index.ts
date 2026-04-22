import express from "express";
import cors from "cors";
import { randomUUID } from "node:crypto";
import { initialRestaurants } from "../assets/mockRestaurants.ts";

const PORT = 3001;

type Review = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

type Dish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

type Restaurant = {
  id: string;
  name: string;
  menu: Dish[];
  reviews: Review[];
};

const restaurants: Restaurant[] = structuredClone(
  initialRestaurants,
) as Restaurant[];

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const app = express();
app.use(cors());
app.use(express.json());

const findRestaurant = (id: string) =>
  restaurants.find((r) => r.id === id);

app.get("/restaurants", async (_req, res) => {
  await delay(2000);
  res.json(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  await delay(300);
  const restaurant = findRestaurant(req.params.id);
  if (!restaurant) {
    res.status(404).json({ message: "Ресторан не найден" });
    return;
  }
  res.json(restaurant);
});

app.post("/restaurants/:id/reviews", async (req, res) => {
  await delay(400);
  const restaurant = findRestaurant(req.params.id);
  if (!restaurant) {
    res.status(404).json({ message: "Ресторан не найден" });
    return;
  }

  const { user, text, rating } = req.body as Partial<Review>;
  if (
    typeof user !== "string" ||
    typeof text !== "string" ||
    typeof rating !== "number"
  ) {
    res.status(400).json({ message: "Нужны поля user, text, rating" });
    return;
  }
  if (!text.trim()) {
    res.status(400).json({ message: "Текст отзыва не может быть пустым" });
    return;
  }
  if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    res
      .status(400)
      .json({ message: "Рейтинг должен быть целым числом от 1 до 5" });
    return;
  }

  const review: Review = {
    id: randomUUID(),
    user: user.trim(),
    text: text.trim(),
    rating,
  };
  restaurant.reviews.push(review);
  res.status(201).json(review);
});

app.patch("/restaurants/:id/reviews/:reviewId", async (req, res) => {
  await delay(400);
  const restaurant = findRestaurant(req.params.id);
  if (!restaurant) {
    res.status(404).json({ message: "Ресторан не найден" });
    return;
  }
  const review = restaurant.reviews.find((r) => r.id === req.params.reviewId);
  if (!review) {
    res.status(404).json({ message: "Отзыв не найден" });
    return;
  }

  const { user, text, rating } = req.body as Partial<Review>;
  if (user !== undefined) {
    if (typeof user !== "string" || !user.trim()) {
      res.status(400).json({ message: "Поле user должно быть непустой строкой" });
      return;
    }
    review.user = user.trim();
  }
  if (text !== undefined) {
    if (typeof text !== "string" || !text.trim()) {
      res.status(400).json({ message: "Поле text должно быть непустой строкой" });
      return;
    }
    review.text = text.trim();
  }
  if (rating !== undefined) {
    if (typeof rating !== "number" || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      res
        .status(400)
        .json({ message: "Рейтинг должен быть целым числом от 1 до 5" });
      return;
    }
    review.rating = rating;
  }

  res.json(review);
});

app.delete("/restaurants/:id/reviews/:reviewId", async (req, res) => {
  await delay(400);
  const restaurant = findRestaurant(req.params.id);
  if (!restaurant) {
    res.status(404).json({ message: "Ресторан не найден" });
    return;
  }
  const index = restaurant.reviews.findIndex((r) => r.id === req.params.reviewId);
  if (index === -1) {
    res.status(404).json({ message: "Отзыв не найден" });
    return;
  }
  const [removed] = restaurant.reviews.splice(index, 1);
  res.json(removed);
});

app.get("/", (_req, res) => {
  res.json("I am alive");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});