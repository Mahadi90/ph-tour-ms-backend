/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpstatus from 'http-status-codes'
import { authService } from "./auth.service";

const credentialLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const loginInfo = await authService.credentialLogin(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpstatus.OK,
        message: 'User logged in successfully',
        data: loginInfo
    })
})


export const authController = {
    credentialLogin
}