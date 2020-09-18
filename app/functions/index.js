const functions = require('firebase-functions');
const express =require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQu3HAxKZgiNj41XGLhUbTcgAG3JCDWgm0pJhuojwq3aXid0goclrJcQX5S7hRZRFjS84KLMmIOUXfSZt1DVp7B00famKFvvl');

// App Config
const app = express();

// Middlewars
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello stripe!'
  });
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('PAYEMENT TOTAL: ', total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch(error) {
    console.log('Error: ', error);
  }

});

// api endpoint
// http://localhost:5001/clone-dc80c/us-central1/api

// Server
exports.api = functions.https.onRequest(app);
