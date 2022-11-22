const Pool = require('pg').Pool;
require('dotenv').config();

const creds = process.env;

const pool = new Pool({
	connectionString: creds.CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
});

////////////////////////////////////////////////////////////// CRUD USERS //////////////////////////////////////////////////////////////////////
//Obs.: Params sintax: https://baseurl/api/users/params

const getUsers = (request, response) => {
	pool.query('SELECT * FROM aplicacao.usuario ORDER BY matricula ASC;', (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const getUserById = (request, response) => {
	const id = parseInt(request.params.id);
	
	pool.query('SELECT * FROM aplicacao.usuario u WHERE u.matricula = $1', [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const createUser = (request, response) => {
	const {primeironome, sobrenome, datanascimento, email, telefone, senha} = request.body;

	pool.query('INSERT INTO aplicacao.usuario(primeironome, sobrenome, datanascimento, email, telefone, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [primeironome, sobrenome, datanascimento, email, telefone, senha], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`User created with matricula: ${results.rows[0].matricula}`);
	});
};

//Only updates primeironome, sobrenome, datanascimento, email and telefone. Preserves the id and password.  
const updateUser = (request, response) => {
	const id = parseInt(request.params.id); 
	const {primeironome, sobrenome, datanascimento, email, telefone} = request.body;

	pool.query('UPDATE aplicacao.usuario SET primeironome = $2, sobrenome = $3, datanascimento = $4, email = $5, telefone = $6 WHERE matricula = $1', [id, primeironome, sobrenome, datanascimento, email, telefone], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`User modified with matricula: ${id}`);
	});
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('DELETE FROM aplicacao.usuario WHERE matricula = $1', [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`User deleted with matricula: ${id}`);
	});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
	createUser,
};