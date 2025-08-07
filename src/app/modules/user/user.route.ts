import { Router } from "express";
import { userController } from "./user.controller";
import { createUserZodValidation } from "./user.validation";
import { validationRequest } from "../../middlewares/validationRequest";

const router = Router()

router.post('/register',validationRequest(createUserZodValidation), userController.createUser)
router.get('/all-user', userController.getAllUsers)

export const userRouter = router