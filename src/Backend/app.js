const express = require('express');
require('./Connection/conn.js');
const bookRouter = require('./Routes/booksRoutes.js')
const userRouter = require('./Routes/booksRoutes.js');
const cors = require('cors')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('swagger-jsdoc');


const options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Book Store App',
            description:'Book Store app in express'
        },
        servers:[
            {
            url:'http://localhost:8000'
        }
    ]
    },
    apis:["./routes/*.js"],
};

const spec = swaggerDoc(options);


app.use(cors());
app.use(express.json());
app.use('/api/v1',bookRouter);
app.use('/api/v1', userRouter);
app.use("/app-doc",swaggerUi.serve,swaggerUi.setup(spec));


app.listen(8000,()=>{
    console.log('Server run at port 8000');
});