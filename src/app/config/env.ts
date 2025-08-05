import dotenv from 'dotenv';

dotenv.config()

interface EnvConfig {
    PORT: string,
    DB_URl: string,
    NODE_ENV: 'development' | 'production'
}

const loadEnvVariables = (): EnvConfig => {

    const requiredEnvVariables: string[] = ["NODE_ENV", "DB_URl", "PORT"]

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing env variables : ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URl: process.env.DB_URl as string,
        NODE_ENV: process.env.NODE_ENV as 'development' | 'production'
    }
}

export const envVars = loadEnvVariables()