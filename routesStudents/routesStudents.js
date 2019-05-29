const express = require('express')
const db = require('../data/student-model')
const router = express.Router()

//GET find all students
router.get('/', async (req, res) => {
    try {
        const getAllstudents = await db.find()
        res.json({ message: `Successfully retrieved all students`, getAllstudents })
    } catch (error) {
        res.status(500).json({ error: `There was a problem retrieving students from the database`, error })
    }
})

//GET find student by id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const studentById = await db.findById(id)
        res.json({ message: `Successfully retrieved student with id ${id}`, studentById })
    } catch (error) {
        res.status(500).json({ error: `There was a problem retrieving student with id ${id}`, error })
    }
})

//POST add student
router.post('/', async (req, res) => {
    const { body } = req

    try {
        const addedstudent = await db.add(body)
        res.status(201).json({ message: `Successfully added student`, addedstudent })
    } catch (error) {
        res.status(500).json({ error: `There was an error adding student to database`, error })
    }
})

//PUT update student
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updatedstudent = await db.update(id, body)
        res.status(204).json({ message: `Successfully updated student with id ${id}`, updatedstudent })
    } catch (error) {
        res.status(500).json({ error: `There was a problem updating student with id ${id}`, error })
    }
})

//DELETE remove student by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedstudent = await db.remove(id)
        res.json({ message: `Successfully removed student with id ${id}`, deletedstudent })
    } catch (error) {
        res.status(500).json({ error: `There was an error removing student with id ${id}`, error })
    }
})

module.exports = router