const fs = require("fs");
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const PlaceModel = require("./models/place.model");
const CategoryModel = require("./models/category.model");
const ProductModel = require("./models/product.model");
const ReviewModel = require("./models/review.model");

const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);
const places = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/places.json`, "utf-8")
);

const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/categories.json`, "utf-8")
);
const produtcs = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/products.json`, "utf-8")
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/reviews.json`, "utf-8")
);

const importData = async () => {
  try {
    await UserModel.create(users);
    await PlaceModel.create(places);
    await CategoryModel.create(categories);
    await ProductModel.create(produtcs);
    await ReviewModel.create(reviews);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async () => {
  try {
    await UserModel.deleteMany();
    await PlaceModel.deleteMany();
    await CategoryModel.deleteMany();
    await ProductModel.deleteMany();
    await ReviewModel.deleteMany();
    console.log("Data Deleted...".red);
    process.exit();
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
