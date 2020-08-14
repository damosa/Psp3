import 'reflect-metadata';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from "typeorm";

import  petsRoutes  from "./routes/pet.routes";

const app =   express();
createConnection();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api',petsRoutes);

app.listen(4000);
console.log('Server in port ', 4000);