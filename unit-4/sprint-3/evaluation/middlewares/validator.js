function validator(req, res, next) {
  if (req.method == "POST") {
    if (!req.body.dish_name || !req.body.price || !req.body.cuisine || !req.body.rating) {
      res.send({ err: "Few fields are missing, cannot process the request" });
    } else {
        next();
    }
  } else {
    next();
  }
}

module.exports = { validator };