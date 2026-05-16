import { Router } from "express";
import { profileController } from "./profile.controller";

const router = Router();

router.post("/", profileController.createProfile);

// get all profiles from database
router.get("/", profileController.getAllProfile);


//get Single Profile from Database
router.get("/:id", profileController.getSingleProfile);

export const profileRoute = router;
