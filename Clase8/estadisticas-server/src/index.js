const express = require("express");
const cors = require("cors");
const httpClient = require("./http");

const server = express();

server.use(cors());
server.use(express.json());

server.post("/api/stats", (req, res) => {
	const fecha = req.body.fecha;
	httpClient.instance.get(httpClient.endpoints.USD_ENDPOINT).then((t) => {
		const encontrado = t.data.find(function(val){
			return val.d == fecha
		})
		res.json(encontrado);
	});
});

server.listen(3001, () =>
	console.log("Servidor ejecutandose en http://localhost:3001")
);
