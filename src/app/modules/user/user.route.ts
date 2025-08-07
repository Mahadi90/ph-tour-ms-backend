import { Router } from "express";
import { userController } from "./user.controller";
import { createUserZodValidation } from "./user.validation";
import { validationRequest } from "../../middlewares/validationRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";



const router = Router()



router.post('/register',validationRequest(createUserZodValidation), userController.createUser)
router.get('/all-user', checkAuth(Role.ADMIN, Role.SUPER_ADMIN),userController.getAllUsers)
router.patch('/:id',checkAuth(...Object.values(Role)), userController.updateUser)


export const userRouter = router