console.log('hello world');

const express = require('express')
const TodoService = require('./api/todo.service')
const app = express()
const port = 3000
const todoService = new TodoService();

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile('index.html'))
app.get('/api/todos', async (req, res) => {
    const todos = await todoService.getTodos();
    res.json(todos);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))