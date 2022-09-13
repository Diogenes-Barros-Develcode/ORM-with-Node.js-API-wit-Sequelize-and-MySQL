const { Router } = require('express')
const { pegaTodasAsTurmas, pegaUmaTurma, criaTurma, atualizaTurma, apagaTurma } = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', pegaTodasAsTurmas)
router.get('/turmas/:id', pegaUmaTurma)
router.post('/turmas', criaTurma)
router.put('/turmas/:id', atualizaTurma)
router.delete('/turmas/:id', apagaTurma)

module.exports = router