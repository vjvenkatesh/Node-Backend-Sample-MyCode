const router=require("express").Router();

const {
    getCurrencies,
    getSpecificCurrencies,
  } = require("../controllers/currencies.controller");


//currencies-controller
router.get("/", getCurrencies);

router.get("/:symbol", getSpecificCurrencies);




module.exports=router;