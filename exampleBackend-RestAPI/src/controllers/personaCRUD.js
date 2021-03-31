const { Pool } = require('pg');


const config = {
    user: 'postgres',
    host: 'localhost',
    password: '4477123',
    database: 'exampleDB',
    port: '5432'
}

const pool = new Pool(config);

const getPersonas = async (req, res) => {
    console.log("entre aqui a hacer un get")
    try {
        const response = await pool.query('SELECT * FROM "Personas"');
        res.status(200).json(response.rows);
    } catch (e) {
        console.log("Ocurrio el siguiente error:", e)
    }
};


const createPersona = async (req, res) => {
    try {
        const { nombre, edad, email } = req.body;
        const response = await pool.query('INSERT INTO "Personas" (nombre, edad, email) VALUES ($1, $2,$3)', [nombre, edad, email]);
        res.json({
            message: 'User Added successfully',
            body: {
                user: { nombre, edad, email }
            }
        })
    } catch (e) {
        console.log("Ocurrio el siguiente error:", e)
        res.json({
            message: 'User Not Added',
            body: {
                user: { nombre, edad, email }
            }
        })
    }

};


module.exports = {
    getPersonas,
    createPersona,
};