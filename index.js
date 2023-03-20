const express = require('express')

const app = express()
const port = 3000

app.get('/', function(req, res){
    res.send('servidor rodando')
})

app.listen(port, function(erro){
    if (erro) {
        console.log('Ocoreu um erro!')
    } else {
        console.log('Servidor iniciado com sucesso')
    }
})