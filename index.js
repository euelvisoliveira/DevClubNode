const { response } = require('express')
const express = require('express')

const port = 3000
const app = express()
app.use(express.json())
/*

  - Query params => meusite.com/users?nome=elvis&age=23 // FILTROS
  - Route params => users/2 // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO
  - Request Body => { "name":"Elvis", "age":}

*/

// QUERY PARAMS

app.get('/users/', (request, response) => {
  const { name, age } = request.query // Destructuring assignment

  return response.json({ name, age })
})

app.listen(port, () => {
  console.log(`🚀 Serve started on port ${port}`)
})

//ROUTE PARAMS

/*
app.get('/users/:id', (request, response) => {
  const { id } = request.params
  return response.send({ id })
})

app.listen(port, () => {
  console.log(`🚀 Serve started on port ${port}`)
})

// REQUEST BODY

app.get('/users', (request, response) => {
  const { name, age } = request.body
  return response.json({ name, age })
})

app.listen(port, () => {
  console.log(`💣Server started on port ${port}`)
})

*/
