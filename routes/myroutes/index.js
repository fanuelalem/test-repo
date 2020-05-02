const router = require('express').Router();

const productController = require('../../controllers/productsController');

router.get('/products', productController.SELECT_ALL_PRODUCTS)

// router.get("/products", (req,res) => {
//     res.send("this is the products page")
// })
// router.get('/',(req,res)=>{
//     res.send("go to your cart")
// })


module.exports = router;
