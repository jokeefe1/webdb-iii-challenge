const db = require('./dbConfig')

function find() {
    return db('cohorts')
}

function findById(id) {
    return db('cohorts').where({ id }).first()
}

function add(cohort) {
    return db('cohorts').insert(cohort)
}

function update(id, name) {
    return db('cohorts').where({ id }).insert(name)
}

function remove(id) {
    return db('cohorts').where({ id }).delete(id)
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}