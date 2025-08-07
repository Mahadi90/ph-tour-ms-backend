import AppError from "../../errorHelpers/appError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import httpstatus from 'http-status-codes';
import bcryptjs from "bcryptjs"
import { craeteToken } from "../../utils/jwt";
import { envVars } from "../../config/env";


const credentialLogin = async(payload : Partial<IUser>) => {
    const {email, password} = payload;

    const isUserExist = await User.findOne({email})

    if(!isUserExist){
        throw new AppError(httpstatus.BAD_REQUEST, 'email does not exist')
    }

    const isPasswordMatched = await bcryptjs.compare(password as string, isUserExist.password as string)

    if(!isPasswordMatched){
          throw new AppError(httpstatus.BAD_REQUEST, 'Password does not match')
    }
    const jwtPayload = {
        user_id : isUserExist._id,
        email : isUserExist.email,
        role : isUserExist.role
    }

    const accessToken = craeteToken(jwtPayload, envVars.JWT_ACCESS_SECRET, envVars.JWT_ACCESS_EXPIRES)

    return {
        email : isUserExist.email,
        accessToken
    }
}

export const authService = {
    credentialLogin
}