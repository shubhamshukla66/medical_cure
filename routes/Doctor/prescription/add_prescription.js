var express = require('express');
var router = express.Router();
const{ add_prescription} = require("../../../controller/Doctor/prescription/add_prescription")
const upload = require("../../../handler/multer")

router.post("/doctor/add_prescription_details",upload.single('patient_image'),add_prescription)

module.exports = router;