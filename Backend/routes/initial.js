const express = require("express");
const multer = require("multer");
// const app = express();
const { getModel, uploadModel } = require("../controller/initial");
const router = express.Router();
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const glbStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, "uploads/images");
    } else {
      cb(null, "uploads/glb");
    }
  },
  filename: function (req, file, cb) {
    const currentDate = new Date();
    const filename = `${currentDate.getTime()}-${Math.floor(
      Math.random() * 10000000 + 1
    )}`;
    cb(null, filename);
  },
});
// const imageUpload = multer({
//   storage: imageStorage,
// }).single("thumbnail");
const glbUpload = multer({
  storage: glbStorage,
  // fileFilter: function (req, file, cb) {
  //   if (
  //     file.mimetype !== "model/gltf+json" &&
  //     file.mimetype !== "model/gltf-binary"
  //   ) {
  //     console.log(file);
  //     return cb(new Erro r("Invalid file type. Please upload a GLTF file."));
  //   }
  //   cb(null, true);
  // },
}).fields([
  { name: "file", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);
router.route("/").get(getModel).post(glbUpload, uploadModel);
module.exports = router;
