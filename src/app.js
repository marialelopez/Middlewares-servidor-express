const express = require("express");
const app = express();

const mediumClients = require("./medium-clients");
const premiumClients = require("./premium-clients");

app.use("/medium-clients", mediumClients);
app.use("/premium-clients", premiumClients);

app.get("/category/:category", (req, res, next) => {
 const category = req.params.category
 if (category === "a") {
  res.redirect("/premium-clients");
 } 
 else if(category === "b"){
  res.redirect("/premium-clients");
 }
 else if(category === "c"){
  res.redirect("/premium-clients");
 }
 else {
  res.redirect("/medium-clients");
 }
 next();
});

app.get("/", function (req, res) {
 res.send("Bienvenido a la api de ADA Cars");
});

module.exports = app;
