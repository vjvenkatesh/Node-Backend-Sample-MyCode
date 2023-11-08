const Joi = require("joi");

const userSchema = Joi.object().keys({
  age: Joi.number().integer().min(0).max(100),
  gender: Joi.string().valid("male", "female"),
});

const validateSearchQuery = (req, res, next) => {
  const { gender, age } = req.query;

  const result = userSchema.validate({ gender, age });

  if (result.error) {
    return res.status(422).json(result.error);
  }
  req.addNewKey = "Random Stuff";
  next();
};


const oneMoreMiddlewareFn=(req,res,next)=>{
  console.log("helloo");
  next();
}



module.exports = { validateSearchQuery,oneMoreMiddlewareFn };
