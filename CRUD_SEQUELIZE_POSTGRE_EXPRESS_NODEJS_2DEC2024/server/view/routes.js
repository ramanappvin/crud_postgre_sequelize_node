const express = require ('express');
const router = express.Router();
const { getAllEmp, addEmp, updateEmp, deleteEmp } = require('../controller/userController');

router.get("/getAll", getAllEmp);
router.post("/addEmp", addEmp);
router.put("/emp/:empId", updateEmp);   // takes parameter after /emp
router.delete("/emp/:empId", deleteEmp);

module.exports = router;
