// routes
const router = require('express').Router();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.TEST_ACCESS_TOKEN,
});


router.post('/buy',  async (req, res) =>{

      
   let preference = {
      items: [
        {
          title: req.body.title,
          unit_price: req.body.price,
          quantity: req.body.quantity,
        },
      ],
    };
    
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        console.log(response.body)
        res.send(response.body.init_point)
        console.log(req.body)
      })
      .catch(function (error) {
        console.log(error);
      });     
      
} )

module.exports = router;
