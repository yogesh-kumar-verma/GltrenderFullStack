const express = require("express");
const app = express();
const port = 3000;
const initDB = require("./models/init");
initDB().catch((error) => [console.log(error)]);
const cors = require("cors");
app.use(express.json());
const initialroutes = require("./routes/initial");
const corsConfig = {
  credentials: true,
  origin: "http://localhost:5173",
};
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/", initialroutes);
app.listen(port, () => {
  console.log("app is running on port ", port);
});
