const express = require('express');

const router = express.Router();

const projectDb = require('../../data/helpers/projectModel');
const actionsDb = require('../../data/helpers/actionModel');

router.get('/', (req, res) => {
    projectDb.get()
        .then(pro => {
            res.status(200).json(pro)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error retrieving Projects.'})
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    projectDb.get(id)
        .then(pro => {
            if(!pro){
                res.status(404).json({ message: "Specified Id does not exist"})
            } else {
                res.status(200).json(pro)
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Error retrieving Projects.'})
        })
})

router.post('/', (req, res) => {
    console.log('req for project', req.body);
    const proBody = req.body;
    projectDb.insert(proBody)
        .then(project => {
                res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Making Projects.'})
        })
})
router.put('/:id', (req, res) => {
    const id = req.params.id;
    projectDb.update(id, req.body)
        .then(update => {
            res.status(200).json({...update, ...req.body })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Project Could Not Be Modified."})
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    projectDb.remove(id)
        .then(remove => {
             if(remove){
                res.status(202).json({ message: `Removed Successfully.` })
             } else {
                res.status(404).json({ message: 'The Project with specified ID does not exist.'})
             }
         })
        .catch(err => {
            res.status(400).json({ error: 'The user could not be removed'})
     })
});




module.exports = router;