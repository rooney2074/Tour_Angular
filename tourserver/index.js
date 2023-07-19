const express = require('express')

const cors=require('cors')

const dataService = require('./services/dataservice')

const app = express()

//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all products

app.get('/place',(req,res)=>{
    dataService.get()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/purpose',(req,res)=>{
    dataService.purpose()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/business',(req,res)=>{
    dataService.business()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/hotel',(req,res)=>{
    dataService.hotel()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/holiday',(req,res)=>{
    dataService.holiday()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})