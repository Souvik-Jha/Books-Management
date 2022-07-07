
const  express  = require("express");
const userController = require("../controllers/userController");
//const reviewController = require("../controllers/reviewController")
const bookController = require("../controllers/bookController")
const router = express.Router();


router.post("/register",userController.createUser)

router.post("/login",userController.loginUser)

router.post("/books",bookController.createBook)

router.get("/books",bookController.getBooks)


router.get("/books",bookController.deleteBookById)

router.get("/books",bookController.getDetails)

router.put("/books/:bookId",bookController.updateBook)




module.exports = router










