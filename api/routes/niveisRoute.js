const { Router } = require('express')
const { pegaTodasOsNiveis, pegaUmaNivel, criaNivel, atualizaNivel, apagaNivel } = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', pegaTodasOsNiveis)
router.get('/niveis/:id', pegaUmaNivel)
router.post('/niveis', criaNivel)
router.put('/niveis/:id', atualizaNivel)
router.delete('/niveis/:id', apagaNivel)

module.exports = router