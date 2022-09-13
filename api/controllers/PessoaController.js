const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(request, response) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return response.status(200).json(todasAsPessoas)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(request, response) {
        const { id } = request.params
        try {
            const umaPessoa = await database.Pessoas.findOne({where: { id : Number(id)}})
            return response.status(200).json(umaPessoa)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async criaPessoa(request, response) {
        const novaPessoa = request.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return response.status(200).json(novaPessoaCriada)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(request, response) {
        const { id } = request.params
        const novasInfos = request.body
        try {
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({where: { id : Number(id)}})
            return response.status(200).json(pessoaAtualizada)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async apagaPessoa(request, response) {
        const { id } = request.params
        try {
            await database.Pessoas.destroy({where: { id : Number(id)}})
            return response.status(200).json({message: 'Usuário apagado com sucesso!'})
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(request, response) {
        const { estudante_id, matricula_id } = request.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: { 
                    id : Number(matricula_id), 
                    estudante_id: Number(estudante_id)
                }
            })
            return response.status(200).json(umaMatricula)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async criaMatricula(request, response) {
        const { estudante_id } = request.params
        const novaMatricula = {...request.body, estudante_id: Number(estudante_id)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return response.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(request, response) {
        const { estudante_id, matricula_id } = request.params
        const novasInfos = request.body

        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({where: { id : Number(matricula_id)}})
            return response.status(200).json(matriculaAtualizada)
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }

    static async apagaMatricula(request, response) {
        const { estudante_id, matricula_id } = request.params
        try {
            await database.Matriculas.destroy({
                where: { 
                    id : Number(matricula_id),
                    estudante_id: Number(estudante_id)
                }
            })
            return response.status(200).json({message: 'Matricula apagada com sucesso!'})
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController