# Instalacion
## Usando Dockers

###### Ingresar los siguientes comandos:

**docker-compose build**

**docker-compose up**

# Instalacion
## Node server
###### Ingresar los siguientes comandos:

**Rellenamos la base de datos con: npm run db**

**En el archivo envConfig cambiamos esta linea: DATABASE: process.env.NODE_ENV !== 'development' ? 'mongo:27017/fifaUltimateTest' : 'localhost:27017/fifaUltimateTest'**

**En el archivo envConfig cambiamos esta linea: DATABASE: process.env.NODE_ENV === 'development' ? 'mongo:27017/fifaUltimateTest' : 'localhost:27017/fifaUltimateTest'**

**Por ultimo: npm start**

