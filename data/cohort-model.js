const db = require('./dbConfig')

function find() {
    return db('cohorts')
}

function findById(id) {
    return db('cohorts').where({ id }).first()
}

module.exports = {
    find,
    findById
}