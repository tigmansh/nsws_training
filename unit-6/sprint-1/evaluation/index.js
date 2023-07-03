const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const app = express();
app.use(express.json());

const sequelize = new Sequelize(
  process.env.database,
  "root",
  "mysql@17431743",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Making Brands Table Model ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const brands = sequelize.define("brands", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  logo: { type: DataTypes.STRING, allowNull: false },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Making Products Table Model ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const products = sequelize.define("products", {
  name: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  brandID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "brands", key: "id" },
  },
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAKING RELATIONSHIPS ⬇️ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

products.belongsTo(brands, { foreignKey: "brandID" });
brands.hasMany(products, { foreignKey: "brandID" });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BRANDS ROUTE ⬇️ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Brands POST

app.post("/api/brands", (req, res) => {
  const { name, logo } = req.body;
  brands
    .create(req.body)
    .then((data) => {
      res
        .status(200)
        .send({ msg: `${req.body.name} is posted in brands table.` });
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error");
    });
});

// Brands GET

app.get("/api/brands", (req, res) => {
  brands
    .findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error");
    });
});

// Brands PUT

app.put("/api/brands/:id", async (req, res) => {
  const id = req.params.id;
  const { name, logo } = req.body;
  try {
    const x = await brands.findByPk(id);
    if (!x) {
      res.status(404).send({ msg: `Brands Not Found By id ${id}.` });
    } else {
      await x.update(req.body);
      res.status(200).send(x);
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// Brands DELETE

app.delete("/api/brands/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const x = await brands.findByPk(id);
    if (!x) {
      res.status(404).send({ msg: `Brands Not Found By id ${id}.` });
    } else {
      await x.destroy();
      res.status(200).send({ msg: "Brand Deleted Successfully !" });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PRODUCTS ROUTE ⬇️ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Products POST

app.post("/api/products", (req, res) => {
  const { name, image, price, brandID } = req.body;
  products
    .create(req.body)
    .then((data) => {
      res
        .status(200)
        .send({ msg: `${req.body.name} is posted in products table.` });
    })
    .catch((err) => {
      res.status(500).send("Internal Server Error");
    });
});

// Products GET

app.get("/api/products", async (req, res) => {
  try {
    const x = await products.findAll({ include: brands });
    res.status(200).send(x);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// Products PUT

app.put("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const { name, image, price, brandID } = req.body;
  try {
    const x = await products.findByPk(id);
    if (!x) {
      res.status(404).send({ msg: `Products Not Found By id ${id}.` });
    } else {
      await x.update(req.body);
      res.status(200).send(x);
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// Products DELETE

app.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const x = await products.findByPk(id);
    if (!x) {
      res.status(404).send({ msg: `Products Not Found By id ${id}.` });
    } else {
      await x.destroy();
      res.status(200).send({ msg: "Brand Deleted Successfully !" });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SERVER CREATION ! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

sequelize.sync().then(() => {
  app.listen(process.env.port, () => {
    console.log(`Server running on port ${process.env.port}`);
  });
});
