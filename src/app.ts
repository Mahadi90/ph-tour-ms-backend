import express, { Request, Response } from 'express';

export const app = express()


app.get('/', (req :Request, res : Response) => {
    res.send({message : "PH tour management system is running...."})
})