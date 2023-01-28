const express = require("express");

const router = express.Router();

const {
    getAllEmp,
    postCreateEmp,
    putUpdateEmp,
    deleteEmp,
    loginEmp
} = require("../controllers/emp");

// router.get("/", getAllEmp);

// router.post("/", postCreateEmp);
router.post("/", loginEmp);

module.exports = router;
