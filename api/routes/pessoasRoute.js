const { Router } = require('express')
const { 
    pegaTodasAsPessoas, 
    pegaUmaPessoa, 
    criaPessoa, 
    atualizaPessoa, 
    apagaPessoa, 
    pegaUmaMatricula, 
    criaMatricula, 
    atualizaMatricula,
    apagaMatricula
} = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', pegaTodasAsPessoas)
router.get('/pessoas/:id', pegaUmaPessoa)
router.post('/pessoas', criaPessoa)
router.put('/pessoas/:id', atualizaPessoa)
router.delete('/pessoas/:id', apagaPessoa)
router.get('/pessoas/:estudante_id/matricula/:matricula_id', pegaUmaMatricula)
router.post('/pessoas/:estudante_id/matricula', criaMatricula)
router.put('/pessoas/:estudante_id/matricula/:matricula_id', atualizaMatricula)
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', apagaMatricula)


module.exports = router