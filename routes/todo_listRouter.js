const todo_listController = require('../controllers/todo_listController.js')

const router = require('express').Router()

router.post('/addTodo_list',todo_listController.addTodo_list)

router.get('/getSortedTodo_lists',todo_listController.getSortedTodo_lists)

router.get('/getAllTodo_lists',todo_listController.getAllTodo_lists)


router.get('/:id',todo_listController.getOneTodo_list)

router.put('/:id',todo_listController.updateTodo_list)

router.delete('/:id',todo_listController.deleteTodo_list)

module.exports = router