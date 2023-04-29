const initDB = require("../models/init");
initDB().catch((error) => console.log(error));
const ObjectModel = require("../models/model");
async function deleteall() {
  try {
    let res = await ObjectModel.deleteMany({});
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
// deleteall();

async function addData() {
  try {
    for (let i = 1; i < 19; i++) {
      if (i != 10 || i != 11 || i != 14 || i != 15 || i != 16) {
        let Object = new ObjectModel();
        Object.user = "yogesh";
        Object.objectName = `P${i}`;
        // Object.objectDesc = data.desc;
        Object.objectPath = `uploads/glb/P${i}.glb`;
        const thumbnail = "";
        // if (req.files.thumbnail == undefined) {
        //   // console.log("undefined hai");
        // } else {
        //   Object.objectThumbnail = req.files?.thumbnail[0].path;
        // }
        // console.log("object hai", Object);
        await Object.save();
      }
    }

    // if (req.files.thumbnail == undefined) {
    //   // console.log("undefined hai");
    // } else {
    //   Object.objectThumbnail = req.files?.thumbnail[0].path;
    // }
    // console.log("object hai", Object);
  } catch (err) {
    console.log(err);
  }
}
// addData();
