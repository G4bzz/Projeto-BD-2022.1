const Pool = require('pg').Pool;
require('dotenv').config();

const creds = process.env;

const pool = new Pool({
	connectionString: creds.CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
});

////////////////////////////////////////////////////////////// CRUD EVENTO //////////////////////////////////////////////////////////////////////
//Obs.: Params sintax: https://baseurl/api/events/params

const getEvents = (request, response) => {
	pool.query('SELECT * FROM aplicacao.evento ORDER BY id_evento ASC;', (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const getEventById = (request, response) => {
	const id = parseInt(request.params.id);
	
	pool.query('SELECT * FROM aplicacao.evento WHERE id_evento = $1', [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const createEvent = (request, response) => {
	const {titulo, local, datainicio, datafim, descricao, mat_criador, tipoevento} = request.body;

	pool.query('INSERT INTO aplicacao.evento(titulo, local, datainicio, datafim, descricao, mat_criador, reagido_id_reagido, tipoevento, interessados) VALUES ($1, $2, $3, $4, $5, $6, NULL, $7, 0) RETURNING *', [titulo, local, datainicio, datafim, descricao, mat_criador, tipoevento], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Event created with id_evento: ${results.rows[0].id_evento}`);
	});
};

//Only updates titulo, local, dataInicio, dataFim, descricao and tipoevento. Preserves the id_evento, mat_criador and interessados.  
const updateEvent = (request, response) => {
	const id = parseInt(request.params.id); 
	const {titulo, local, datainicio, datafim, descricao, tipoevento} = request.body;
	pool.query('UPDATE aplicacao.evento SET titulo = $2, local = $3, datainicio = $4, datafim = $5, descricao = $6, tipoevento = $7 WHERE id_evento = $1', [id, titulo, local, datainicio, datafim, descricao, tipoevento], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Event modified with id_evento: ${id}`);
	});
};

const deleteEvent = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('DELETE FROM aplicacao.evento WHERE id_evento = $1', [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Event deleted with id_evento: ${id}`);
	});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
	getEvents,
	getEventById,
	updateEvent,
	deleteEvent,
	createEvent,
};