/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpstatus from 'http-status-codes';
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body)

        res.status(httpstatus.CREATED).json({ message: 'User created successfully', user })

    } catch (error: any) {
        res.status(httpstatus.BAD_REQUEST).json({ message: `Something went wrong ${error.message}`, error })
    }
}

export const userController = {
    createUser
}