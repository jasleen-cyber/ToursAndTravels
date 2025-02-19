const app = express(); //app variable s server banta h
const tourController = require("./../Controllers/tourController");

const Router = express.Router();

Router.route("/").get(tourController.getAllTours).post(tourController.newTour);
Router.route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

app.use("/api/v1/tours", Router);
