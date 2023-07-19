const mongoose = require('mongoose')

//Define connection String

mongoose.connect('mongodb://localhost/tour');
mongoose.connection.on('connected', function() {
  console.log('Connected to MongoDB!');
}); 

const place = mongoose.model('place',{
    id:Number,
    name:String,
    description:String,
    rating:Number,
    image:String,
    price:Number
})

const other = mongoose.model('other',{
  name:String,
  type:String,
  image:String,
  price:Number,
  rating:Number
})

module.exports={
    place,other
}