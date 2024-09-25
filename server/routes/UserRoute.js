import express from 'express'
import { create, getAll, getone, update,deleteuser } from '../controller/UserController.js';

const route = express.Router();

route.post("/create",create);
route.get("/getall",getAll);
route.get("/getone/:id",getone);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteuser);

export default route