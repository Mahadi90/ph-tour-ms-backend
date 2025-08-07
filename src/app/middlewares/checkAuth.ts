import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt";
import AppError from "../errorHelpers/appError";
import { envVars } from "../config/env";

export const checkAuth = (...authRoles : string[]) => (req : Request, res : Response, next : NextFunction) => {
    try {
        const token = req.headers.authorization

        if(!token){
            throw new AppError(403, 'token unavailable')
        }
        
       const verifiedToken = verifyToken(token, envVars.JWT_ACCESS_SECRET) as JwtPayload

       if(!authRoles.includes(verifiedToken.role)){
        throw new AppError(403, 'You are not parmitted to see all user')
       }

       req.user = verifyToken
       next()

    } catch (error) {
        next(error)
    }
}