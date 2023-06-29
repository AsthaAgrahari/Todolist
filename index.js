const express = require('express');
const cors = require('cors');
var app=express();

var corOptions = {
    origin: 'https://localhost:3000'
}


// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/todo_listRouter.js')
app.use('/api/todo_lists', router)


// api testing
app.get('/', (req,res) => {
    res.json({message: 'api tested'})
})


// PORT
const PORT=process.env.PORT || 3000;

// server
app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); 