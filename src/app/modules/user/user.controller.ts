/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpstatus from 'http-status-codes';
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { verifyToken } from "../../utils/jwt";
import { envVars } from "../../config/env";
import { JwtPayload } from "jsonwebtoken";


const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.createUser(req.body)

    // res.status(httpstatus.CREATED).json({ message: 'User created successfully', user })
        sendResponse(res, {
        success : true,
        statusCode :httpstatus.CREATED, 
        message : 'User created successfully',
        data : user
    })
})
const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const verifiedToken = req.user
    const payload = req.body;

    const user = await userService.updateUser(userId, payload, verifiedToken)

    // res.status(httpstatus.CREATED).json({ message: 'User created successfully', user })
        sendResponse(res, {
        success : true,
        statusCode :httpstatus.CREATED, 
        message : 'User updated successfully',
        data : user
    })
})


const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.getAllUsers()

    // res.status(httpstatus.OK).json({
    //     success : true,
    //     message : 'Users retrived sucessfully',
    //     users
    // })

    sendResponse(res, {
        success : true,
        statusCode :httpstatus.OK, 
        message : 'Users retrived sucessfully',
        meta : result.meta,
        data : result.data
    })
})

export const userController = {
    createUser,
    getAllUsers,
    updateUser
}