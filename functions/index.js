const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MMtEdSEIHx8risWXvDRVR0ZPBmpQm9Br1mdSp6xfvffl2iXfY4PATl8ebT7wQtZv2BlDyXpUACsDGjfIeeG5uV200grVnW8pg')

//API
//APP config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/' , (req,res)=>
res.status(200).send('hello world'))
app.post('/payments/create',async (req,res)=>{
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    }) // ok created
})

//Listen command
exports.api = functions.https.onRequest(app)