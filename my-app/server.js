const express=require('express')
const app=express()
const path=require("path")
const http=require('http')
const PORT = process.env.PORT || 3500;
const server=http.createServer((req,res)=>{

})
server.listen(PORT,(error)=>{
    if (error){
        console.log('error')
    }else{
        console.log('Server is running on '+PORT)
    }
})