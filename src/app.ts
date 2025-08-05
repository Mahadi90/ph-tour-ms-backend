import express, { Request, Response } from 'express';

import cors from 'cors'
import { router } from './app/routes';

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', router)


app.get('/', (req :Request, res : Response) => {
    res.send({message : "PH tour management system is running...."})
})