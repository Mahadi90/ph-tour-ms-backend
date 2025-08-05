import { Types } from "mongoose"

export enum IsActive  {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IAuthProvider {
    provider : string,
    providerId : string
}

export enum Role { 
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN",
    USER = "USER",
    GUIDE = "GUIDE"
}

export interface IUser {
    name : string,
    email : string,
    password? : string,
    picture? : string,
    phone? :string,
    address? : string,
    isDeleted? : string,
    isActive? : IsActive,
    isVarified? : string
    auth? : IAuthProvider[],
    role? : Role,
    bookings? : Types.ObjectId[],
    guides? : Types.ObjectId[]
}