/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/appError";

export const globalErrorHandler = (err : any, req : Request, res : Response, next : NextFunction) => {
  let status = 500;
  let message = "Something went wrong!!";

  if(err instanceof AppError){
    status = err.statusCode;
    message = err.message
  }else if(err instanceof Error){
    status = 500;
    message = err.message
  }

  res.status(status).json({
    success : false,
    message,
    err,
    stack : envVars.NODE_ENV === 'development' ? err.stack : null 
  })
}