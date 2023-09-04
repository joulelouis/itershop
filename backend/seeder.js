import mongoose from "mongoose";
import dotenv from 'dotenv'; // need the MONGO_URI to connect with the MongoDB database importing data
import users from './data/users.js';
import products from "./data/products.js";
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from "./config/db.js";

dotenv.config(); // initialize dotenv to use the variable in .env file

connectDB(); // connect to the database

const importData = async () => {
    try {
        // delete records of Order, Product, and User
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // create Users from users.js and store it in createdUsers variable/object
        const createdUsers = await User.insertMany(users);

        // create admin from the first registered user and store it in adminUser object
        // get the object id using ._id 
        const adminUser = createdUsers[0]._id;

        // create Products object
        const sampleProducts = products.map((product) => {
            // spread operator ('...') to create a new object for each product in the 'products' array
            // the spread operator '{ ...product }' is used to copy all the properties and values from the original 'product' object. 
            // in addition to copying all the properties of the original 'product' object, a new property called 'user' is added to the object. 'user' is set to 'adminUser', which is the '_id' of the first registered user in the 'createdUsers' array.
            return { ...product, user: adminUser };
        });

        // insert the products to the database
        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}