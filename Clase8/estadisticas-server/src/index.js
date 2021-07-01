const express = require("express");
const cors = require("cors");
const httpClient = require("./http");

const server = express();

server.get("/", (req, res) => {
	httpClient.instance.get(httpClient.endpoints.USD_ENDPOINT).then((t) => {
		res.json(t.data);
	});
});

server.listen(3001, () =>
	console.log("Servidor ejecutandose en http://localhost:3001")
);
