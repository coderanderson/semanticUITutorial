var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("landing");
})

app.listen(8080, "127.0.0.1", function() {
	console.log("launch success");
});