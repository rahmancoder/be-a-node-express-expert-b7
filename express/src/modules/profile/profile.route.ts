import { Router } from "express";
import { profileController } from "./profile.controller";

const router = Router();

router.post("/", profileController.createProfile);

// get all profiles from database
router.get("/", profileController.getAllUsers);

export const profileRoute = router;
