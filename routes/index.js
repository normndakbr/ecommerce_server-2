const router = require("express").Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.use(authentication);
router.post("/products", productController.create);
router.get("/products", productController.read);
router.get("/products/:id", productController.readById);
router.put("/products/:id", productController.update);
router.delete("/products/:id", authorization, productController.delete);

module.exports = router;