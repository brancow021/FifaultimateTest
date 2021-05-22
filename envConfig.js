module.exports = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	HOST: process.env.HOST || 'http://localhost',
	DATABASE: process.env.NODE_ENV !== 'development' ? 'mongo:27017/fifaUltimateTest' : 'localhost:27017/fifaUltimateTest' 
}