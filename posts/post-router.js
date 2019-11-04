const express = require('express');

// database access using knex
const knex = require('../data/dbConfig.js');

const router = express.Router();

////---------ROUTES BELOW---------\\\\

router.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(posts => {
        res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to get posts from db"})
        })

});
router.get('/:id', (req, res) => {
    knex
        .select('*')
        .from('accounts')
        .where('id', '=', req.params.id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to get an account from db"})
        })
    
})

router.post('/', (req, res) => {
    knex
        .insert(req.body, 'id') //ignore the console warning on sqlite
        .into('accounts')
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to post into db"})
        })
    
})

router.delete('/:id', (req, res) => {
    knex('accounts')
    .where({ id: req.params.id})
    .del()
    .then(count => {
        // count: how many records/rows were deleted
        res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to get post from db"})
        })
    
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    knex('accounts')
    .where({ id: req.params.id }) // filter results
    .update(body)
    .then(count => {
        // count: how many records/rows were updated
        res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to get post from db"})
        })
    
})

module.exports = router;