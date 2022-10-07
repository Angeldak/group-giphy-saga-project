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
  res.sendStatus(200);
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
router.delete("/:favID", (req, res) => {
  const queryText = `DELETE FROM "favorite" WHERE "id" = $1;`;

  pool
    .query(queryText, [req.params.favID])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error caught in DELETE :>> ", error);
    });
});

module.exports = router;
