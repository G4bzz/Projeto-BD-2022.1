const Pool = require('pg').Pool;

require('dotenv').config();

const creds = process.env;


const pool = new Pool({
	connectionString: creds.CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
});

////////////////////////////////////////////////////////////// CRUD COMMENTS //////////////////////////////////////////////////////////////////////
//Obs.: Params sintax: https://baseurl/api/comments/params

const getComments = (request, response) => {
	pool.query('SELECT * FROM aplicacao.comentario ORDER BY id_comentario ASC;', (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const getCommentsByEvent = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('SELECT * FROM aplicacao.comentario c WHERE c.id_evento = $1 ORDER BY id_comentario ASC;',[id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

const getCommentById = (request, response) => {
	const id = parseInt(request.params.id);
	
	pool.query('SELECT * FROM aplicacao.comentario WHERE id_comentario = $1', [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

//Needs to be created before the comment
const createReagido = (request, response) => {
	const {id_reagido} = request.body;
	pool.query('INSERT INTO aplicacao.reagido (id_reagido) VALUES ($1) RETURNING *;', [id_reagido], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Reagido created with id_reagido: ${results.rows[0].id_reagido}`);
	});
};

const createComment = (request, response) => {
	const {data, texto, mat_criador, id_evento} = request.body;
	pool.query('INSERT INTO aplicacao.comentario(data, texto, mat_criador, id_evento) VALUES ($1, $2, $3, $4) RETURNING *;', [data, texto, mat_criador, id_evento], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Comment created with id_comentario: ${results.rows[0].id_comentario}`);
	});
};

//Only updates texto.  
const updateComment = (request, response) => {
	const id = parseInt(request.params.id); 
	const {texto} = request.body;
	pool.query('UPDATE aplicacao.comentario SET texto = $2 WHERE id_comentario = $1', [id, texto], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Comment modified with id_comentario: ${id}`);
	});
};

const deleteComment = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query("DELETE FROM aplicacao.comentario WHERE id_comentario = $1;", [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Comment deleted with id_comentario: ${id}`);
	});
};

//Needs to be deleted after the comment
const deleteReagido = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query("DELETE FROM aplicacao.reagido WHERE id_reagido = $1;", [id], (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).send(`Reagido deleted with id_reagido: ${id}`);
	});
};

const getReagidos = (request, response) => {
	pool.query('SELECT * FROM aplicacao.reagido ORDER BY id_reagido ASC;', (error, results) => {
		if(error) {
			throw error
		};
		response.status(200).json(results.rows);
	});
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
	getComments,
	getCommentById,
	getCommentsByEvent,
	updateComment,
	deleteComment,
	createComment,
	createReagido,
	deleteReagido,
	getReagidos
};