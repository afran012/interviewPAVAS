const sequelize = require('../db_connection_data')

const createZona = async (req, res) =>{
    const { Name } = req.body

    let arrayInsertZona = [ `${Name}` ]

    try {
        const result = await sequelize.query('INSERT INTO Zona(Name) VALUES( ? )',
        {replacements: arrayInsertZona , type: sequelize.QueryTypes.INSERT })
        
        res.status(201).json({
            message: 'Tipo Vivienda creada',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}


const getZona = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from Zona z`, {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({
            message: 'Tipo Viviendas existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteZona = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM Zona WHERE ZonaID = ${req.params.id}`)
        res.status(204).json({
            'msg':true,
            message: 'Tipo Vivienda eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateZona = async (req, res) =>{
    const { Name  } = req.body

    try {
        const result = await sequelize.query(`UPDATE Zona 
        SET Name = '${Name}'
        WHERE ZonaID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        res.status(204).json({
            message: 'Tipo Vivienda actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getZonaById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM Zona 
        WHERE ZonaID = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({
            message: 'Tipo Vivienda encontrada:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

exports.createZona = createZona
exports.getZona = getZona
exports.deleteZona = deleteZona
exports.updateZona = updateZona
exports.getZonaById = getZonaById

