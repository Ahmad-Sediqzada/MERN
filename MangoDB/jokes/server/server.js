const express = require("express");
const app = express();
const port = 8000;



app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require("./routes/jokes.route");
JokeRoutes(app);

require("./config/mongoose.config");

app.listen(port, () => console.log(`Express running on port ${port}`));
