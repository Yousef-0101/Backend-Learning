import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import redditData from "./data.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/cats", (req, res) => {
	const cats = ["Blue", "Orange", "PusPus", "Kitty"];
	res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (data) res.render("subreddit", { ...data });
	else res.render("notFound", { subreddit });
});

app.get("/random", (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render("random", { num });
});

app.listen(port, () => {
	console.log(`Evesdropping On Port ${port}`);
});
