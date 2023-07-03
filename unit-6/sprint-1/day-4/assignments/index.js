// Require necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize, DataTypes } = require("sequelize");

// Create a new Express application
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the database connection
const sequelize = new Sequelize("user_Order", "root", "mysql@17431743", {
  host: "localhost",
  dialect: "mysql",
});

// Define the User model
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the Order model
const Order = sequelize.define("Order", {
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Set up the relationships between the models
User.hasMany(Order);
Order.belongsTo(User);

// Define a middleware function to verify the JWT token
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    req.userId = decoded.id;
    next();
  });
}

// Define the routes for user registration and login
app.post("/auth/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }
    User.create({ email, password: hash })
      .then((user) => {
        // const token = jwt.sign({ id: user.id }, "secretkey");
        res.status(200).send({ msg: "User Registered" });
      })
      .catch((error) => {
        res.status(500).send({err: error.message});
      });
  });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Unauthorized");
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).send("Internal Server Error");
        }
        if (!result) {
          return res.status(401).send("Unauthorized");
        }
        const token = jwt.sign({ id: user.id }, "secretkey");
        res.status(200).send({ token });
      });
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error");
    });
});


app.post("/orders/create", verifyToken, (req, res) => {
  const { item_name, quantity, total_price } = req.body;
  const userId = req.userId;
  Order.create({ item_name, quantity, total_price, UserId: userId });
});

app.delete("/orders/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  Order.findOne({ where: { id, UserId: userId } })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Not Found");
      }
      order.destroy();
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error");
    });
});

app.get("/orders", verifyToken, (req, res) => {
  const userId = req.userId;
  Order.findAll({ where: { UserId: userId } })
    .then((orders) => {
      res.status(200).send(orders);
    })
    .catch((error) => {
      res.status(500).send("Internal Server Error");
    });
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
