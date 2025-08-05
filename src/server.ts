/* eslint-disable no-console */
import {Server} from 'http';
import mongoose from 'mongoose';
import { app } from './app';
import { envVars } from './app/config/env';

let server : Server;

const startServer = () => {
    try {
        mongoose.connect(envVars.DB_URl)
        console.log('Connected to Database');

        server = app.listen(envVars.PORT,  () => {
            console.log(`Server started on port ${envVars.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()


process.on("unhandledRejection", () => {
    console.log("unhandledRejection error detected!!  Server shutting down....");

    if(server){
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on("uncaughtException", () => {
    console.log("uncaughtException error detected!!  Server shutting down....");

    if(server){
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})
process.on("SIGINT", () => {
    console.log("Sigint signal recieved!!  Server shutting down....");

    if(server){
        server.close(() => {
            process.exit(1)
        })
    }
    process.exit(1)
})

