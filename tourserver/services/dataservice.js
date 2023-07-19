const db = require('./db');

const get =()=>{
    return db.place.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const purpose =()=>{
    return db.other.find({"type":"purpose"}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const business =()=>{
    return db.other.find({"type":"business"}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const hotel =()=>{
    return db.other.find({"type":"hotel"}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

const holiday =()=>{
    return db.other.find({"type":"holiday"}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

module.exports={
    get,purpose,business,hotel,holiday
}