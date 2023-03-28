const express = require('express')
const router = express.Router() //Esta etapa faz parte da configuração da rota
const app = express()


app.use(express.json())


const PORTA = 3333


function mostraOla(request, response) {
 response.send("Olá, mundo!") //Aqui estamos criando a função que produz a resposta
}


app.use(router.get('/ola', mostraOla)) //Agora estamos dizendo para o aplicativo responder o verbo GET na rota /ola e chamar a função mostraOla


function mostraPorta() {
 console.log(`Servidor criado e rodando na porta ${PORTA}`)
}


app.listen(PORTA, mostraPorta)
