// import NewsController
const NewsController = require("../controllers/NewsController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello News API Express");
});

// Membuat routing news
/* Menampilkan data News */
router.get("/news", NewsController.index);
/* Menambahkan data News */
router.post("/news", NewsController.store);
/* Mengubah data News */
router.put("/news/:id", NewsController.update);
/* Menghapus data News */
router.delete("/news/:id", NewsController.destroy);
/* Membuat routing untuk menampilkan satu data News */
router.get("/news/:id", NewsController.show);
/* Membuat routing untuk menampilkan data news melalui judul */
router.get("/news/search/:title", NewsController.search);
/* Membuat routing untuk menampilkan data news yang memiliki tema sport */
router.get("/news/category/sport", NewsController.findByCategory);
/* Membuat routing untuk menampilkan data news yang memiliki tema finance */
router.get("/news/category/finance", NewsController.findByCategory);
/* Membuat routing untuk menampilkan data news yang memiliki tema automotive */
router.get("/news/category/automotive", NewsController.findByCategory);
// export router
module.exports = router;
