const morgan = require('morgan');
const express = require('express');

//const tourController = require("./Tours/tourController");
//const userController = require("./Users/userController");

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

// const log = console.log;
//  Tours/tourController.js

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  // console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

/* 
app.get('/', (req,res) =>{

res.send("hello the server is running") ;

});

app.post('/',(req,res)=>{
    //res.status(200).send("this can post as well")

    res.json({message: "jason m data hu",app : "Natours"});
}); 
 */
/*

);

//log(tours);
/* 




  */

/* app.get("/api/v1/tours", getAllTours);

app.post("/api/v1/tours", addTour);

  app.get('/api/v1/tours/:id',getTour);

    app.patch('/api/v1/tours/:id',updateTour);
  
 app.delete('/api/v1/tours/:id',deleteTour); */

/* onst tour = tours.find(el => (el.id === id){
         tour = tours[el.id*1];

       


            res.json({
            status : "success",
            data : {
                tour
            }
        })
    })

    if(!tour){
        res.status(404).json({
            status : "page not found !",
            data : {
                
            }
        })
    }

})
 */

//new tour details - name , duration and difficulty



//const tourController = require("./Tours/tourController");
//const userController = require("./Users/userController");

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

// const log = console.log;
//  Tours/tourController.js

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  // console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

/* 
app.get('/', (req,res) =>{

res.send("hello the server is running") ;

});

app.post('/',(req,res)=>{
    //res.status(200).send("this can post as well")

    res.json({message: "jason m data hu",app : "Natours"});
}); 
 */
/*

);

//log(tours);
/* 




  */

/* app.get("/api/v1/tours", getAllTours);

app.post("/api/v1/tours", addTour);

  app.get('/api/v1/tours/:id',getTour);

    app.patch('/api/v1/tours/:id',updateTour);
  
 app.delete('/api/v1/tours/:id',deleteTour); */

/* onst tour = tours.find(el => (el.id === id){
         tour = tours[el.id*1];

       


            res.json({
            status : "success",
            data : {
                tour
            }
        })
    })

    if(!tour){
        res.status(404).json({
            status : "page not found !",
            data : {
                
            }
        })
    }

})
 */

//new tour details - name , duration and difficulty


const morgan = require('morgan');
const express = require('express');

//const tourController = require("./Tours/tourController");
//const userController = require("./Users/userController");

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

// const log = console.log;
//  Tours/tourController.js

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  // console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

/* 
app.get('/', (req,res) =>{

res.send("hello the server is running") ;

});

app.post('/',(req,res)=>{
    //res.status(200).send("this can post as well")

    res.json({message: "jason m data hu",app : "Natours"});
}); 
 */
/*

);

//log(tours);
/* 




  */

/* app.get("/api/v1/tours", getAllTours);

app.post("/api/v1/tours", addTour);

  app.get('/api/v1/tours/:id',getTour);

    app.patch('/api/v1/tours/:id',updateTour);
  
 app.delete('/api/v1/tours/:id',deleteTour); */

/* onst tour = tours.find(el => (el.id === id){
         tour = tours[el.id*1];

       


            res.json({
            status : "success",
            data : {
                tour
            }
        })
    })

    if(!tour){
        res.status(404).json({
            status : "page not found !",
            data : {
                
            }
        })
    }

})
 */

//new tour details - name , duration and difficulty



//const tourController = require("./Tours/tourController");
//const userController = require("./Users/userController");


// const log = console.log;
//  Tours/tourController.js

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  // console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

/* 
app.get('/', (req,res) =>{

res.send("hello the server is running") ;

});

app.post('/',(req,res)=>{
    //res.status(200).send("this can post as well")

    res.json({message: "jason m data hu",app : "Natours"});
}); 
 */
/*

);

//log(tours);
/* 




  */

/* app.get("/api/v1/tours", getAllTours);

app.post("/api/v1/tours", addTour);

  app.get('/api/v1/tours/:id',getTour);

    app.patch('/api/v1/tours/:id',updateTour);
  
 app.delete('/api/v1/tours/:id',deleteTour); */

/* onst tour = tours.find(el => (el.id === id){
         tour = tours[el.id*1];

       


            res.json({
            status : "success",
            data : {
                tour
            }
        })
    })

    if(!tour){
        res.status(404).json({
            status : "page not found !",
            data : {
                
            }
        })
    }

})
 */

//new tour details - name , duration and difficulty