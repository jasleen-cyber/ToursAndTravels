//const app = express(); //app variable s server banta h
const userController = require("./../Controllers/userController");

const Router = express.Router();

Router.route("/").get(userController.getAllUsers).post(userController.newUser);

Router.route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// you can use below ionly after fully declaring them like so in ABOVE.
// IT CANNOT BE PRESENT above before previous code i.e. the declaration

app.use("/api/v1/users", Router);
