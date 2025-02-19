const { join } = require("path");
const morgan = require("morgan");
const app = express();

//middleware used for parsing data
// below middleware is used in add new tour

app.use(morgan("dev"));
// morgan logs : GET /api/v1/tours 200 8.400 ms - 11459

app.use((req, res, next) => {
  l("helou from the middleware siiide 📸");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  //res.status(200).send("hello from the server babe")
  res.status(200).json({ message: "hello from the server babe" });
});
app.post("/", (req, res) => {
  res.status(200).send("you can post here");
});

/* app.get("/api/v1/tours", getAllTours);
app.get("/api/v1/tours/:id", getTour);
app.post("/api/v1/tours", newTour);
app.patch("/api/v1/tours/:id", updateTour);
app.delete("/api/v1/tours/:id", deleteTour); */

const port = 8000;
app.listen(port, () => {
  l(`app is running on port ${port}`);
});
