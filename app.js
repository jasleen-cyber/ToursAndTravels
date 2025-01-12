const express = require("express");
const app = express(); //app variable s server banta h
const fs = require("fs");
const l = console.log;
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync("./dev-data/data/tours-simple.json", "utf-8")
);

app.get("/", (req, res) => {
  //res.status(200).send("hello from the server babe")
  res.status(200).json({ message: "hello from the server babe" });
});
app.post("/", (req, res) => {
  res.status(200).send("you can post here");
});

//to get all tours
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    message: {
      tours: tours,
    },
  });
});

//get one tour
app.get("/api/v1/tours/:id", (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
});

//adding new tour
app.post("/api/v1/tours", (req, res) => {
  /*  l(req.body);
  res.send("DONE"); */
  //let id = req.params.id;
  const newId = tours[tours.length - 1].id + 1;
  // + 1 constant type ko numeric banane k lie

  const newTour = Object.assign({ id: newId }, req.body);
  //Object.assign to merge two objects into one
  tours.push(newTour);
  //tours.push : pushes new tour to the array constanr tours , basically adds new tour to the variable
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.patch("/api/v1/tours/:id", (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    res.status(400).json({
      status: "fail",
      message: "invalid id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tours: "<updated tour here>"
    }
  });
});

const port = 3000;
app.listen(port, () => {
  l(`app is running on port ${port}`);
});
