/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpstatus from 'http-status-codes';
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next : NextFunction) => {
    try {
        const user = await userService.createUser(req.body)

        res.status(httpstatus.CREATED).json({ message: 'User created successfully', user })

    } catch (error: any) {
        next(error)
    }
}

export const userController = {
    createUser
}