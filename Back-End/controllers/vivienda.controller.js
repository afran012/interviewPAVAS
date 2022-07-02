const sequelize = require('../db_connection_data')

const createVivienda = async (req, res) => {
    const { dormitorios, direccion, precio, tamano, observaciones, tipoviviendaid, zonaid } = req.body

    let arrayInsertVivienda = [`${dormitorios}`, `${direccion}`, `${precio}`, `${tamano}`, `${observaciones}`, `${tipoviviendaid}`, `${zonaid}`]

    try {
        const result = await sequelize.query('INSERT INTO Vivienda(dormitorios,direccion,precio,tamano,observaciones,tipoviviendaid,zonaid) VALUES( ? , ? , ? , ? , ? , ? , ?)',
            { replacements: arrayInsertVivienda, type: sequelize.QueryTypes.INSERT })

        res.status(201).json({
            message: ' Vivienda creada',
            'msg': true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({ error })
    }
}


const getVivienda = async (req, res) => {
    console.log("aca");
    try {
        const result = await sequelize.query(`SELECT * from Vivienda`, { type: sequelize.QueryTypes.SELECT })
        res.status(200).json({
            message: ' Viviendas existentes',
            'msg': true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteVivienda = async (req, res) => {

    try {
        const result = await sequelize.query(`DELETE FROM Vivienda WHERE ViviendaID = ${req.params.id}`)
        res.status(204).json({
            'msg': true,
            message: ' Vivienda eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateVivienda = async (req, res) => {
    const { dormitorios, direccion, precio, tamano, observaciones, tipoviviendaid, zonaid } = req.body


    try {
        const result = await sequelize.query(`UPDATE Vivienda 
        SET 
        dormitorios = '${dormitorios}',
        direccion = '${direccion}',
        precio = '${precio}',
        tamano = '${tamano}',
        observaciones = '${observaciones}',
        tipoviviendaid = '${tipoviviendaid}',
        zonaid = '${zonaid}'
        WHERE ViviendaID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        res.status(204).json({
            message: ' Vivienda actulizado'
        })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getViviendaById = async (req, res) => {

    try {
        const result = await sequelize.query(`SELECT * FROM Vivienda 
        WHERE ViviendaID = ${req.params.id}`,
            { type: sequelize.QueryTypes.SELECT })
        res.status(200).json({
            message: ' Vivienda encontrada:',
            'msg': true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

exports.createVivienda = createVivienda
exports.getVivienda = getVivienda
exports.deleteVivienda = deleteVivienda
exports.updateVivienda = updateVivienda
exports.getViviendaById = getViviendaById

