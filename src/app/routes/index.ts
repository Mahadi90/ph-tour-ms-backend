import { Router } from "express";
import { userRouter } from "../modules/user/user.route";

export const router = Router()

const routerModules = [
    {
        path : '/user',
        route : userRouter
    }
]

routerModules.forEach(route => {
    router.use(route.path, route.route)
})