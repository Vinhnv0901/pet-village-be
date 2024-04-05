const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { productRoute, newRoute } = require("./routes");
const app = express();
app.use(cors()); //run in local
// config formart(middleware)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" })); //json
app.use(express.urlencoded({ limit: "50mb" })); //form
//*** routes */
app.use("/api/products", productRoute);

app.use("/api/news", newRoute); ///???????

//******GET */
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://vinhvinh673019:SIzPoF56YM18JlLG@cluster0.05asqri.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database :)");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection Failed :(");
  });
