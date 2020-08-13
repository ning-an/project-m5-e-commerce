"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const items = require("./data/items.json");
const companies = require("./data/companies.json");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  .get("/itemsAndCompanies", (req, res) => {
    if (items && companies) {
      let payload = {
        items,
        companies,
      };
      res.status(200).json(payload);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })
  .get("/item/:itemId", (req, res) => {
    if (items) {
      const itemId = req.params.itemId;
      const item = items.find((itemInfo) => {
        return itemInfo.id === Number(itemId);
      });
      res.status(200).json(item);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })

  .get("/section/:sectionarea", (req, res) => {
    if (items) {
      const sectionarea = req.params.sectionarea;
      const section = items.filter((body) => {
        return body.body_location === sectionarea;
      });
      res.status(200).json(section);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })

  .get("/company/:companyId", (req, res) => {
    if (companies) {
      const companyId = req.params.companyId;
      const company = companies.find((companyInfo) => {
        return companyInfo.id === Number(companyId);
      });
      res.status(200).json(company);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })

  .get("/categories/:category", (req, res) => {
    if (items) {
      const category = req.params.category;
      const section = items.filter((body) => {
        return body.category === category;
      });
      res.status(200).json(section);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })

  .post("/updateInventoryFromPurchase", (req, res) => {
    let purchaseOrder = req.body;

    if (purchaseOrder) {
      purchaseOrder.forEach((item) => {
        items.find((items) => items.id === item.id).numInStock -= item.quantity;
      });
      res.status(200).send("worked");
    } else {
      res.status(404).send("Something went wrong with purchasing");
    }
  })

  .get("/*", (req, res) => {
    res.status(404).json({ message: "aw shucks" });
  })
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
