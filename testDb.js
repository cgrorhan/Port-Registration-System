const mongoose = require('mongoose');
const Post=require('./models/testData');

mongoose.connect('mongodb://localhost/test_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/*Post.create({
    title:"another title from test",
    content:"another content from test"
},(error,post)=>{
    console.log(error,post)

})*/


/*Post.find({
    title:"title from test"
}, (error,post)=>{
    console.log(error,post)
})*/