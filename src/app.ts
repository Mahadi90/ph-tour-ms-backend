import express, { Request, Response } from 'express';

import cors from 'cors'
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globarErrorHandler';
import { notFound } from './app/middlewares/notFound';

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)


app.get('/', (req :Request, res : Response) => {
    res.send({message : "PH tour management system is running...."})
})

app.use(globalErrorHandler)
app.use(notFound)