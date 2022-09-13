const database = require('../models')

class NivelController {
    static async pegaTodasOsNiveis(request, response) {
        try {
            const todasOsNiveis = await database.Niveis.findAll()
            return response.status(200).json(todasOsNiveis)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async pegaUmaNivel(request, response) {
        const { id } = request.params
        try {
            const umNivel = await database.Niveis.findOne({where: { id : Number(id)}})
            return response.status(200).json(umNivel)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async criaNivel(request, response) {
        const novoNivel = request.body
        try {
            const novoNivelCriada = await database.Niveis.create(novoNivel)
            return response.status(200).json(novoNivelCriada)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async atualizaNivel(request, response) {
        const novasInfos = request.body
        const { id } = request.params
        try {
            await database.Niveis.update(novasInfos, {where: {id: Number(id)}})
            const NivelAtualizado = await database.Niveis.findOne({where: { id : Number(id)}})
            return response.status(200).json(NivelAtualizado)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async apagaNivel(request, response) {
        const { id } = request.params
        try {
            await database.Niveis.destroy({where: { id : Number(id)}})
            return response.status(200).json({message: 'Usuário apagado com sucesso!'})
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }
}

module.exports = NivelController