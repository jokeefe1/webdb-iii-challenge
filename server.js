const express = require('express')
const helmet = require('helmet')
const routerCohorts = require('./routesCohorts/routesCohorts')
const routerStudents = require('./routesStudents/routesStudents')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/cohorts', routerCohorts)
server.use('/api/students', routerStudents)

server.get('/', (req, res) => {
    try {
        res.json({ message: `Welcom to the lambda api`})
    } catch (error) {
        res.status(500).json({ error: `There was a problem reaching the home page`, error})
    }
})

module.exports = server