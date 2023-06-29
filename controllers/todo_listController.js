const db = require('../models/server')

// creating main Model
const Todo_list = db.todo_lists


// 1. creating todo_list

const addTodo_list = async (req,res) => {

    let info={
        id: req.body.id,
        subject: req.body.subject,
        chapter_no: req.body.chapter_no,
        ranking: req.body.ranking,
    }
    try{
        const todo_list = await Todo_list.create(info)
        res.status(200).send(todo_list)
    }catch(err){
        res.send(err.parent.sqlMessage)
    }

   
}


// 2. get sorted todo_list

const getSortedTodo_lists = async (req,res) =>{
    try {
        let todo_lists = await Todo_list.findAll({ order :[['ranking']]})
        res.status(200).send(todo_lists)

    } catch (err) {
        res.send(err.message)
    }
    
}


// 3. get entire todo_list

const getAllTodo_lists = async (req,res) =>{
    try {
        let todo_lists = await Todo_list.findAll({})
        res.status(200).send(todo_lists)
    } catch (err) {
        res.send(err.message)
    }
    

}


// 4. get list by id

const getOneTodo_list = async (req,res) =>{
    let id = req.params.id
    try{
        let todo_list = await Todo_list.findOne({ where: {id: id}})
        if(todo_list==null)
        {
            res.status(200).send("no data with given id")
        }
        else
        {
            res.status(200).send(todo_list)
        }
    }catch(err){
        res.send(err)
    }
    
}


// 5. updating todo_list

const updateTodo_list = async (req,res) =>{
    let id = req.params.id
    try{
        let todo_list = await Todo_list.update(req.body, { where: {id: id}})
        res.status(200).send(todo_list)
    }catch(err){
        res.send(err.message)
    }
    
}


// 6. delete list by id

const deleteTodo_list = async (req,res) =>{

    let id = req.params.id
    try{
        const deleted_list=await Todo_list.destroy({ where: {id: id}})
        console.log(deleted_list)
        if(deleted_list==0){
            res.send('No list with given id to delete')
        }
        else{
            res.status(200).send('List is deleted.')
        }
    }catch(err){
        console.log(err.message)
    }
    
}

module.exports = {
    addTodo_list,
    getSortedTodo_lists,
    getAllTodo_lists,
    getOneTodo_list,
    updateTodo_list,
    deleteTodo_list 
}


