const express = require('express')
const db = require('../data/cohort-model')
const router = express.Router()

//GET find all cohorts
router.get('/', async (req, res) => {
    try {
        const getAllCohorts = await db.find()
        res.json({ message: `Successfully retrieved all cohorts`, getAllCohorts})
    } catch (error) {
        res.status(500).json({ error: `There was a problem retrieving cohorts from the database`, error})    
    }
})

//GET find cohort by id
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const cohortById = await db.findById(id)
        res.json({ message: `Successfully retrieved cohort with id ${id}`, cohortById})
    } catch (error) {
        res.status(500).json({ error: `There was a problem retrieving cohort with id ${id}`, error})
    }
})

//POST add cohort
router.post('/', async (req, res) => {
    const { body } = req

    try {
        const addedCohort = await db.add(body)
        res.status(201).json({ message: `Successfully added cohort`, addedCohort})
    } catch (error) {
        res.status(500).json({ error: `There was an error adding cohort to database`, error})
    }
})

//PUT update cohort
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        const updatedCohort = await db.update(id, body)
        res.status(204).json({ message: `Successfully updated cohort with id ${id}`, updatedCohort})
    } catch (error) {
        res.status(500).json({ error: `There was a problem updating cohort with id ${id}`, error})
    }
})

//DELETE remove cohort by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedCohort = await db.remove(id)
        res.json({ message: `Successfully removed cohort with id ${id}`, deletedCohort})
    } catch (error) {
        res.status(500).json({ error: `There was an error removing cohort with id ${id}`, error})
    }
})

module.exports = router