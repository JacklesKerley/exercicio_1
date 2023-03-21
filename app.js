const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// Rota
app.get('/idade', (req, res) => {
    res.render('verificacaoIdade')
})

app.post('/idade', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade
    let idadeValidada = ''

    if (idade >= 0 && idade < 15) {
        idadeValidada = 'Criança'
    } else if (idade >= 15 && idade < 30) {
        idadeValidada = 'Jovem'
    } else if (idade >= 30 && idade < 60) {
        idadeValidada = 'Adulto'
    } else {
        idadeValidada = 'Idoso'
    }

    res.render("idade", {nome: nome, idade: idade, idadeValidada})
})

app.listen(3000, () => {console.log('App Rodando')})