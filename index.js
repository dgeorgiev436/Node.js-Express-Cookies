const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")


app.use(cookieParser("thisismysecret"));

app.get("/greet", (req,res) => {
	const {name = "no-name"} = req.cookies;
	res.send(`HEY THERE ${name}`);
})

app.get("/setname", (req,res) => {
	res.cookie("name", "Toby");
	res.cookie("animal", "cat")
	res.send("Okay, sent you a cookie");
})

app.get("/getsignedcookie", (req,res) => {
	res.cookie("fruit", "grape", {signed: true});
	res.send("SIGNED YOUR FRUIT COOKIE");
})

app.get("/verifyfruit", (req,res) => {
	res.send(req.signedCookies)
})


app.listen(3000, () => {
	console.log("LISTENING TO PORT 3000");
})