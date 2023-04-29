const ObjectModel = require("../models/model");
const getModel = async (req, res) => {
  let data = await ObjectModel.find({});
  // console.log(data);
  res.json(data);
  // res.send("get modela me hai");
};
const uploadModel = async (req, res) => {
  // console.log(req.body, "body", req.files);
  // console.log(req.files.file);
  const data = JSON.parse(req.body.data);
  try {
    let Object = new ObjectModel();
    Object.user = "yogesh";
    Object.objectName = data.name;
    Object.objectDesc = data.desc;
    Object.objectPath = req.files?.file[0]?.path || "";
    const thumbnail = "";
    if (req.files.thumbnail == undefined) {
      // console.log("undefined hai");
    } else {
      Object.objectThumbnail = req.files?.thumbnail[0].path;
    }
    // console.log("object hai", Object);
    await Object.save();
    res.send("upload modela me hai");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getModel, uploadModel };
