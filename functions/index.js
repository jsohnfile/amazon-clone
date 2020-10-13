const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HbVp7Lsbycc8fvDMYrdn6dhfUJWbWyrameqb0unViIm4BdpR2rkO08gmF3Rl0KLyOjWdLIMUFXSB7L3gbRZnPSR00km8u1qMs");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!!! for this amount >>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);