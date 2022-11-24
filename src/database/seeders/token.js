const { Token } = require('..');

module.exports = async () => {
	let joaquin = await Token.create({
		token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvYXF1aW4iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY2ODEwNzYzOX0.wWbom5lvoo--nckNFFlIYwTW87VQujevNi3AC4WjdOM',
		userId: '1',
	});
};
