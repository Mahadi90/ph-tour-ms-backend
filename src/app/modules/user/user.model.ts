import { model, Schema } from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface";

const authSchema = new Schema<IAuthProvider>({
    provider: { type: String, required: true },
    providerId: { type: String, required: true }
},
    {
        versionKey: false,
        _id: false
    })

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    address: { type: String },
    picture: { type: String },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
    isActive: {
        type: String,
        enum: Object.values(IsActive),
        default: IsActive.ACTIVE
    },
    isVarified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    auth: [authSchema]
},
    {
        timestamps: true,
        versionKey: false
    })

 export const User = model<IUser>("User", userSchema)