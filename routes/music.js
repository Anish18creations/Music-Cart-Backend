const express = require('express');
const router = express.Router();
const Music = require("../models/musicproducts");

//adding a product
router.post("/addproducts", async (req, res) => {
    try {
        const { description, product_name, images, rating,
            reviews, price, colour, type, about,
            avalaibility, brand } = req.body;

        if (!description || !product_name || !images.length || !rating || !reviews || !price
            || !colour.length || !type || !about.length || !avalaibility || !brand) {
            res.json({
                message: "Please fill in all the fields!!",
                success: "false"
            })
        }

        const music_productData = new Music({
            description,
            product_name,
            images,
            rating,
            reviews,
            price,
            colour,
            type,
            about,
            avalaibility,
            brand
        })

        const prodRes = await music_productData.save();

        res.json({
            message: "Music Product added successfully!!",
            prodid: prodRes._id,
            success: "true"
        });
    }
    catch (e) {
        console.log(e);
    }

});

//get product info
router.get("/product-info/:prodId", async (req, res) => {
    try {

        const productid = req.params.prodId;

        const prodInfo = await Music.findById(productid);

        if (!prodInfo) {
            res.status(400).json({ message: "No such products found!!", success: "false" });
        }

        res.json({ data: prodInfo, success: "true" });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;