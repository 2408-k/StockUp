
const express = require("express");

const stripe = require("stripe")(
  "sk_test_51IvydSSIj1aMvURLv2S1t5IXYyeFPSSq8zBR3nF58jw4dCzCW0zssJchOvXsya8RaZIIdwCWqWLIh5cEsTB3VlJk00HCVgEQ9R"
); //in the second argument we put the secret key of stripe
//const uuid = require("uuid");

const app = express();
const router = express.Router();
//middleware
app.use(express.json());


//routes

router.post("/", (req, res) => {
  const { product, token } = req.body;
  // console.log("PRODUCT ", product);
  // console.log("PRICE ", product.price);
  const idempontencyKey = Math.random()*1000;

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      );
    })
    .then((result) => {
      res.header("Access-Control-Allow-Origin", "*"); // to allow cors
      res.status(200).json(result);
    });
});

module.exports = router;
