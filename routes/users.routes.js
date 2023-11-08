const router = require("express").Router();

const {
  getUsers,
  getUsersByUuid,
  getUsersWithGenderAndAge,
} = require("../controllers/users.controller");
const { validateSearchQuery ,oneMoreMiddlewareFn} = require("../middlewares/validators/user.validator");




router.get("/search",validateSearchQuery,oneMoreMiddlewareFn, getUsersWithGenderAndAge);

router.get("/:uuid", getUsersByUuid);

router.get("/", getUsers);

module.exports = router;
