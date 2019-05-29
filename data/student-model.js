const db = require('./dbConfig')

function find() {
    return db('students')
}

function findById(id) {
    return db('students').where({ id }).first()
}

function add(cohort) {
    return db('students').insert(cohort)
}

function update(id, name) {
    return db('students').where({ id }).insert(name)
}

function remove(id) {
    return db('students').where({ id }).delete(id)
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}