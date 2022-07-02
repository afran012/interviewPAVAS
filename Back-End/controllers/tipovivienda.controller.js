const sequelize = require('../db_connection_data')

const createTipoVivienda = async (req, res) =>{
    const { Name } = req.body
    console.log(Name);

    let arrayInsertTipoVivienda = [ `${Name}` ]

    try {
        const result = await sequelize.query('INSERT INTO TipoVivienda(Name) VALUES( ? )',
        {replacements: arrayInsertTipoVivienda , type: sequelize.QueryTypes.INSERT })
        
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


const getTipoVivienda = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from TipoVivienda tv`, {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({
            message: 'Tipo Viviendas existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteTipoVivienda = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM TipoVivienda WHERE TipoViviendaID = ${req.params.id}`)
        res.status(204).json({
            'msg':true,
            message: 'Tipo Vivienda eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateTipoVivienda = async (req, res) =>{
    const { Name  } = req.body

    try {
        const result = await sequelize.query(`UPDATE TipoVivienda 
        SET Name = '${Name}'
        WHERE TipoViviendaID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        res.status(204).json({
            message: 'Tipo Vivienda actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getTipoViviendaById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM TipoVivienda 
        WHERE TipoViviendaID = ${req.params.id}`, 
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

exports.createTipoVivienda = createTipoVivienda
exports.getTipoVivienda = getTipoVivienda
exports.deleteTipoVivienda = deleteTipoVivienda
exports.updateTipoVivienda = updateTipoVivienda
exports.getTipoViviendaById = getTipoViviendaById

