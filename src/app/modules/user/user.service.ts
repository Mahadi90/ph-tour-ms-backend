import AppError from "../../errorHelpers/appError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from 'http-status-codes'
import bcryptjs from "bcryptjs"


const createUser = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isExistUser = await User.findOne({email})
    if(isExistUser){
        throw new AppError(httpStatus.BAD_REQUEST, 'User alreeady exist')
    }

    const hashPassword =await bcryptjs.hash(password as string, 10)

    const authProvider : IAuthProvider = {provider : 'credentials', providerId : email as string}

    const user = await User.create({
        email,
        auth : [authProvider] ,
        password : hashPassword,
        ...rest
    })

    return user
}

const getAllUsers = async () => {
    const users = await User.find({})
    const totalUsers = await User.countDocuments()
    return {
         meta: {
            total: totalUsers
        },
        data: users
    }
}

export const userService = {
    createUser,
    getAllUsers
}