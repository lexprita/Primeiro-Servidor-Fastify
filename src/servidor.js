
import Fastify from 'fastify'

// const fastify = Fastify({})
const servidor = Fastify({
    logger: true
})

servidor.get('/teste', function controlador(req, res) {
    const saudacao = 'Bem vindo ao primeiro servidor Node.js'
    return res.send(saudacao)
})

servidor.listen({
    port: 3000
})