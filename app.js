const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// Rota Principal
app.get('/', (req, res) => {
    res.render('principal')
})

// Rota Idade
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

// Rota Media
app.get('/media', (req,res) => {
    res.render('mediaPonderada')
})
app.post('/media', (req, res) => {
    const atividade_pratica_laboratorio = parseFloat(req.body.atividade_pratica_laboratorio)
    const prova_semestre = parseFloat(req.body.prova_semestre)
    const trabalho_teorico = parseFloat(req.body.trabalho_teorico)
    let media = ''

    const mediaPonderada = (((atividade_pratica_laboratorio * 2) + (prova_semestre * 5) + (trabalho_teorico * 3))/ (2+5+3) )

    if (mediaPonderada >= 0 && mediaPonderada <= 5) {
        media = 'F'
    } else if (mediaPonderada > 5 && mediaPonderada <= 6) {
        media = 'E'
    } else if (mediaPonderada > 6 && mediaPonderada <= 7) {
        media = 'D'
    } else if (mediaPonderada > 7 && mediaPonderada <= 8) {
        media = 'C'
    } else if (mediaPonderada > 8 && mediaPonderada <= 9) {
        media = 'B'
    } else if (mediaPonderada > 9 && mediaPonderada <= 10) {
        media = 'A'
    } else {
        media = 'valor acima de 10 ou abaixo de 0, verificar dados digitados.'
    }

    res.render("media", {mediaPonderada, media})

})

// Rota Cadastro
app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})
app.post('/cadastro', (req, res) => {
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    let dataNascimento = req.body.data_nascimento
    let nacionalidade = req.body.nacionalidade

    res.render('cadastroRealizado', {nome, sobrenome, dataNascimento, nacionalidade})
})

app.listen(3000, () => {console.log('App Rodando')})
