const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "favorite" ORDER BY "id";`;

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error caught in GET :>> ", error);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  console.log('In favorite POST with: ', req.body.url);
  const url = req.body.url;
  const query = `INSERT INTO "favorite" ("url")
                VALUES ($1);`;
  pool.query(query, [url])
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('Error in POST: ', err);
        res.sendStatus(500);
      })
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  const categories = req.body;
  const queryText = `UPDATE "favorite" SET "category_id" = $1 WHERE "id" = $2;`;

  pool
    .query(queryText, [categories.category_id, req.params.favId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error caught in PUT :>> ", error);
    });
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
