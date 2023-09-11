const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://losts:losts@cluster0.3vzjfnv.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>console.log('connected'))
.catch((err)=>console.log(err));

