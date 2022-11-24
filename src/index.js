const app = require('./app');
const { db } = require('./database');

const userSeeder = require('./database/seeders/user');
const linkSeeder = require('./database/seeders/link');
const tokenSeeder = require('./database/seeders/token');

app.listen(4000, async () => {
	try {
		await db.sync({ force: true });
		console.log('---------------------------');
		console.log('Server running on port 4000');
		console.log('---------------------------');

		userSeeder();
		linkSeeder();
		tokenSeeder();
	} catch (err) {
		if (err) throw new Error(err);
	}
});
