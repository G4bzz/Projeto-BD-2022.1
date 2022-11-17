<<<<<<< HEAD
//onPress example: onPress={() => getUsers}
const getUsers = () => {
	axios
		.get(`${baseURL}/users`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getUserById(id)}
const getUserById = (id) => {
	axios
		.get(`${baseURL}/users/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateUser(id)}
const updateUser = (id) => {
	axios
		.put(`${baseURL}/users/${id}`, 
		/* { //EXAMPLE
			"primeironome": "MICHAELTEAMO",
			"sobrenome": "MICHAELTEAMO",
			"datanascimento": "1999-04-21T00:00:00",
			"email": "MICHAELTEAMO",
			"telefone": "99999911",
		} */
		{
			"primeironome": var_nome,
			"sobrenome": var_sobrenome,
			"datanascimento": var_datanascimento,
			"email": var_email,
			"telefone": var_telefone,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createUser()}
const createUser = () => {
	axios
	.post(`${baseURL}/users/`, 
		/* { //EXAMPLE
			"matricula": 2022009,
			"primeironome": "TESTE2",
			"sobrenome": "TESTE2",
			"datanascimento": "1988-04-21T00:00:00",
			"email": "TESTE2",
			"telefone": "82873823",
			"senha": "TESTE2",
		} */
		{
			"matricula": var_matricula,
			"primeironome": var_nome,
			"sobrenome": var_sobrenome,
			"datanascimento": var_datanascimento,
			"email": var_email,
			"telefone": var_telefone,
			"senha": var_senha,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteUser(id)}
const deleteUser = (id) => {
	axios
	.delete(`${baseURL}/users/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//onPress example: onPress={() => getEvents}
const getEvents = () => {
	axios
		.get(`${baseURL}/events`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getEventById(id)}
const getEventById = (id) => {
	axios
		.get(`${baseURL}/events/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateEvent(id)}
const updateEvent = (id) => {
	axios
		.put(`${baseURL}/events/${id}`, 
		/* { //EXAMPLE
			"titulo": "EVENTO TESTE",
			"local": "EVENTO TESTE",
			"datainicio": "2022-11-25T00:00:00",
			"datafim": "2022-11-25T00:00:00",
			"descricao": "EVENTO TESTE",
			"tipoevento": "Festa",
		} */
		{
			"titulo": var_titulo,
			"local": var_local,
			"datainicio": var_datainicio,
			"datafim": var_datafim,
			"descricao": var_descricao,
			"tipoevento": var_tipoevento,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createEvent()}
const createEvent = () => {
	axios
	.post(`${baseURL}/events/`, 
		/* { //EXAMPLE
			"titulo": "EVENTO TESTE",
			"local": "EVENTO TESTE",
			"datainicio": "2022-11-25T00:00:00",
			"datafim": "2022-11-25T00:00:00",
			"descricao": "EVENTO TESTE",
			"id_evento": 9,
			"mat_criador": 2022002,
			"tipoevento": "Festa",
		} */
		{
			"titulo": var_titulo,
			"local": var_local,
			"datainicio": var_datainicio,
			"datafim": var_datafim,
			"descricao": var_descricao,
			"id_evento": var_id_evento,
			"mat_criador": var_mat_criador,
			"tipoevento": var_tipoevento,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteEvent(id)}
const deleteEvent = (id) => {
	axios
	.delete(`${baseURL}/events/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//onPress example: onPress={() => getComment}
const getComment = () => {
	axios
		.get(`${baseURL}/comments`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getCommentById(id)}
const getCommentById = (id) => {
	axios
		.get(`${baseURL}/comments/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateComment(id)}
const updateComment = (id) => {
	axios
		.put(`${baseURL}/comments/${id}`, 
		/* { //EXAMPLE
			"texto": "Comentário TESTE.",
		} */
		{
			"texto": var_texto,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createComment()}
const createComment = () => {
	axios
	.post(`${baseURL}/comments/`, 
		/* { //EXAMPLE
			"data": "2022-11-20T00:00:00.000Z",
			"texto": "Comentário TESTE.",
			"mat_criador": 2022005,
			"id_evento": 2,
			"id_comentario": 12,
			"reagido_id_reagido": 12
		} */
		{
			"data": var_data,
			"texto": var_texto,
			"mat_criador": var_mat_criador,
			"id_evento": var_id_evento,
			"id_comentario": var_id_comentario,
			"reagido_id_reagido": var_reagido_id_reagido,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteComment(id)}
const deleteComment = (id) => {
	axios
	.delete(`${baseURL}/comments/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteReagido(id)}
const deleteReagido = (id) => {
	axios
	.delete(`${baseURL}/reagido/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createReagido()}
const createReagido = () => {
	axios
	.post(`${baseURL}/reagido/`, 
		/* { //EXAMPLE
			"id_reagido": 12
		} */
		{
			"id_reagido": var_id_reagido,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getReagidos()}
const getReagidos = () => {
	axios
		.get(`${baseURL}/reagido`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

=======
//onPress example: onPress={() => getUsers}
const getUsers = () => {
	axios
		.get(`${baseURL}/users`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getUserById(id)}
const getUserById = (id) => {
	axios
		.get(`${baseURL}/users/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateUser(id)}
const updateUser = (id) => {
	axios
		.put(`${baseURL}/users/${id}`, 
		/* { //EXAMPLE
			"primeironome": "MICHAELTEAMO",
			"sobrenome": "MICHAELTEAMO",
			"datanascimento": "1999-04-21T00:00:00",
			"email": "MICHAELTEAMO",
			"telefone": "99999911",
		} */
		{
			"primeironome": var_nome,
			"sobrenome": var_sobrenome,
			"datanascimento": var_datanascimento,
			"email": var_email,
			"telefone": var_telefone,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createUser()}
const createUser = () => {
	axios
	.post(`${baseURL}/users/`, 
		/* { //EXAMPLE
			"matricula": 2022009,
			"primeironome": "TESTE2",
			"sobrenome": "TESTE2",
			"datanascimento": "1988-04-21T00:00:00",
			"email": "TESTE2",
			"telefone": "82873823",
			"senha": "TESTE2",
		} */
		{
			"matricula": var_matricula,
			"primeironome": var_nome,
			"sobrenome": var_sobrenome,
			"datanascimento": var_datanascimento,
			"email": var_email,
			"telefone": var_telefone,
			"senha": var_senha,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteUser(id)}
const deleteUser = (id) => {
	axios
	.delete(`${baseURL}/users/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//onPress example: onPress={() => getEvents}
const getEvents = () => {
	axios
		.get(`${baseURL}/events`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getEventById(id)}
const getEventById = (id) => {
	axios
		.get(`${baseURL}/events/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateEvent(id)}
const updateEvent = (id) => {
	axios
		.put(`${baseURL}/events/${id}`, 
		/* { //EXAMPLE
			"titulo": "EVENTO TESTE",
			"local": "EVENTO TESTE",
			"datainicio": "2022-11-25T00:00:00",
			"datafim": "2022-11-25T00:00:00",
			"descricao": "EVENTO TESTE",
			"tipoevento": "Festa",
		} */
		{
			"titulo": var_titulo,
			"local": var_local,
			"datainicio": var_datainicio,
			"datafim": var_datafim,
			"descricao": var_descricao,
			"tipoevento": var_tipoevento,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createEvent()}
const createEvent = () => {
	axios
	.post(`${baseURL}/events/`, 
		/* { //EXAMPLE
			"titulo": "EVENTO TESTE",
			"local": "EVENTO TESTE",
			"datainicio": "2022-11-25T00:00:00",
			"datafim": "2022-11-25T00:00:00",
			"descricao": "EVENTO TESTE",
			"id_evento": 9,
			"mat_criador": 2022002,
			"tipoevento": "Festa",
		} */
		{
			"titulo": var_titulo,
			"local": var_local,
			"datainicio": var_datainicio,
			"datafim": var_datafim,
			"descricao": var_descricao,
			"id_evento": var_id_evento,
			"mat_criador": var_mat_criador,
			"tipoevento": var_tipoevento,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteEvent(id)}
const deleteEvent = (id) => {
	axios
	.delete(`${baseURL}/events/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//onPress example: onPress={() => getComment}
const getComment = () => {
	axios
		.get(`${baseURL}/comments`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getCommentById(id)}
const getCommentById = (id) => {
	axios
		.get(`${baseURL}/comments/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => updateComment(id)}
const updateComment = (id) => {
	axios
		.put(`${baseURL}/comments/${id}`, 
		/* { //EXAMPLE
			"texto": "Comentário TESTE.",
		} */
		{
			"texto": var_texto,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createComment()}
const createComment = () => {
	axios
	.post(`${baseURL}/comments/`, 
		/* { //EXAMPLE
			"data": "2022-11-20T00:00:00.000Z",
			"texto": "Comentário TESTE.",
			"mat_criador": 2022005,
			"id_evento": 2,
			"id_comentario": 12,
			"reagido_id_reagido": 12
		} */
		{
			"data": var_data,
			"texto": var_texto,
			"mat_criador": var_mat_criador,
			"id_evento": var_id_evento,
			"id_comentario": var_id_comentario,
			"reagido_id_reagido": var_reagido_id_reagido,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteComment(id)}
const deleteComment = (id) => {
	axios
	.delete(`${baseURL}/comments/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => deleteReagido(id)}
const deleteReagido = (id) => {
	axios
	.delete(`${baseURL}/reagido/${id}`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => createReagido()}
const createReagido = () => {
	axios
	.post(`${baseURL}/reagido/`, 
		/* { //EXAMPLE
			"id_reagido": 12
		} */
		{
			"id_reagido": var_id_reagido,
		})
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};

//onPress example: onPress={() => getReagidos()}
const getReagidos = () => {
	axios
		.get(`${baseURL}/reagido`)
		.then(function (response) {
			//here you put the function to obtain the response.data
			//setLabel is just an example;
			setLabel(JSON.stringify(response.data));
		})
		.catch(function (error) {
			alert(error.message);
		})
		.finally(function () {
			//alert('Finally called');
		});
};
>>>>>>> integracao-querys
