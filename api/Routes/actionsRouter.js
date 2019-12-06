const express = require('express');

const router = express.Router();

const actionsDb = require('../../data/helpers/actionModel');
const projectDb = require('../../data/helpers/projectModel');

router.get('/', (req, res) => {
    actionsDb.get()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: 'Error retrieving actions data.'})
          })
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    actionsDb.get(id)
        .then(actionId => {
            if(!actionId){
                res.status(400).json({ message: "Invalid User id"})
            } else {
                res.status(200).json(actionId)
        }})
        .catch(err => {
            res.status(500).json({ message: "Error retrieving actions data."})
        })
});
router.post('/', (req, res) => {
    console.log('req', req.body)
    const action = req.body
    actionsDb.insert(action)
        .then(newAction => {
            console.log("new action", newAction)
            res.status(201).json(newAction);
        })
        .catch(err => {
            res.status(500).json({ message: "Error Posting Action Data."})
        })
});
            
            // if(!newAction[0].project_id){
            //     res.status(404).json({ errorMessage: "Project does not exist."})
            // } else {
            //     res.status(201).json(newAction)
            // }
                
            // console.log(newAction)
            // if(!newAction.project_id){
            //     res.status(404).json({ errorMessage: "Project does not exist."})
            // } else if(newAction.description.length > 128 || newAction.description.length === 0){
            //     res.status(400).json({ errorMessage: "Description has exceeded the character limit."})
            // } else {
            //     res.status(201).json(newAction);
            // }



router.put('/:id', (req, res) => {
    const id = req.params.id;
    actionsDb.update(id, req.body)
        .then(update => {
            res.status(200).json({...update, ...req.body })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Action Could Not Be Modified."})
        })
});

router.delete('/:id', (req, res) => {
    actionsDb.get()
        .then()
        .catch()
});

module.exports = router;