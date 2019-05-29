const express = require('express')
const db = require('../data/cohort-model')
const router = express.Router()

//GET find all cohorts
router.get('/', async (req, res) => {
    try {
        console.log('Cohorts')
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

module.exports = router