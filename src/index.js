const express = require("express");
const userRouter = require("./routers/user");
const bookingRouter = require("./routers/booking");

const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./db/mongoose");

connectDB();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(bookingRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
