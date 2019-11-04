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
        .where(id = req.params.id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to get an account from db"})
        })
    
})

router.post('/', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

module.exports = router;