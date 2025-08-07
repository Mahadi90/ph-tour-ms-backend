import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<IUser>) => {
    const { name, email, password } = payload;

    const user = await User.create({
        name,
        email,
        password
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