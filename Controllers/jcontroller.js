const express = require("express");
const fs = require("fs");
const l = console.log;

const tours = JSON.parse(
  fs.readFileSync("./dev-data/data/tours-simple.json", "utf-8")
);

app.use(express.json());

//to get all tours

exports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};

xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};



xports.getAllTours = (req, res) => {
  l(req.requestTime);
  res.status(200).json({
    status: "success",
    RequestedTime: req.requestTime,
    message: {
      tours: tours,
    },
  });
};


//get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};
};


/get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};
};


/get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};
};

//get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};

//get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};


//get one tour
exports.getTour = (req, res) => {
  let id = req.params.id * 1;
  l(id);
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tours: tour,
    },
  });
};


//adding new tour
exports.newTour = (req, res) => {
  /*  l(req.body);
    res.send("DONE"); */
  //let id = req.params.id;
  const newId = tours[tours.length - 1].id + 1;
  // + 1 constant type ko numeric banane k lie

  //json which we are adding in postman can only gets read and added with middleware
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
};

exports.updateTour = (req, res) => {
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
      tours: "<updated tour here>",
    },
  });
};



exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    res.status(400).json({
      status: "fail",
      message: "invalid id",
    });
  }


  res.status(204).json({
    status: "success",
    data: null,
  });
};


exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    res.status(400).json({
      status: "fail",
      message: "invalid id",
    });
  }


  res.status(204).json({
    status: "success",
    data: null,
  });
};


exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  if (id > tours.length) {
    res.status(400).json({
      status: "fail",
      message: "invalid id",
    });
  }


  res.status(204).json({
    status: "success",
    data: null,
  });
};

