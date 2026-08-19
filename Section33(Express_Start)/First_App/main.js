import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	console.log("Home, Sweet Home!!!");
	res.send("Home, Sweet Home!!!");
});

app.get("/cats", (req, res) => {
	console.log("Meoooow");
	res.send("Meoooow");
});

app.post("/cats", (req, res) => {
	console.log("Meoooow, Post");
	res.send("Meoooow, Post");
});

app.get("/dogs", (req, res) => {
	console.log("Wooooof");
	res.send("Wooooof");
});

app.get("/r/:subreddit", (req, res) => {
	const { subreddit } = req.params;
	res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
	const { subreddit, postId } = req.params;
	res.send(
		`<h1>Browsing the ${subreddit} subreddit and exactly the ${postId} post</h1>`,
	);
});

app.get("/search", (req, res) => {
	const { q } = req.query;
	if (!q) return res.send("<h1>Nothing Found If Nothing Searched</h1>");
	res.send(`<h1>Search results for: ${q}</h1>`);
});

// app.use((req, res) => {
// 	console.log("New Request!!!!!!");
// 	res.send("<h2>h2, huh?....That Tracks</h2>");
// }); // Sending resolves the request and closes it

app.get("/*path", (req, res) => {
	console.log("I Don't Know Whatcha Talking About, Man");
	res.send("I Don't Know Whatcha Talking About, Man");
});

app.listen(port, () => {
	console.log("Evesdropping On Port 3000");
});
