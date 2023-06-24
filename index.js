const connection = require('./connection')  
const express = require('express');
const bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json())

app.get('/todos',(req,res)=>{
    connection.query('SELECT * FROM todo_list',(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.get('/todos/:id',(req,res)=>{
    connection.query('SELECT * FROM todo_list WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.delete('/todos/:id',(req,res)=>{
    connection.query('DELETE FROM todo_list WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.post('/todos',(req,res)=>{
    var list=req.body
    var listData=[list.subject,list.chapter_no,list.ranking]
    connection.query('INSERT INTO todo_list(subject,chapter_no,ranking) values(?)',[listData],(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.patch('/todos',(req,res)=>{
    var list=req.body
    connection.query('UPDATE todo_list SET ? WHERE id='+list.id,[list],(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            res.send(rows)
        }
    })
})

app.put('/todos',(req,res)=>{
    var list=req.body
    connection.query('UPDATE todo_list SET ? WHERE id='+list.id,[list],(err,rows)=>{
        if(err){
            console.log(err)
        } else {
            if(rows.affectedRows==0){
                var listData=[list.subject,list.chapter_no,list.ranking]
                connection.query('INSERT INTO todo_list(subject,chapter_no,ranking) values(?)',[listData],(err,rows)=>{
                if(err){
                    console.log(err)
                } else {
                    res.send(rows)
                }
            })
            }else{
            res.send(rows)
            }
        }
    })
})

app.listen(3000,()=>console.log('Express server is running on port 3000')) 