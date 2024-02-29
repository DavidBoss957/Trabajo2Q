
const express = require('express')
const router = express.Router()

// const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/trabajos')
const controllerTrabajos = require('../controllers/trabajos')
// TODO validators
// TODO middleware

// GET requests
router.get('/', controllerTrabajos.getItems)
router.get('/:id', controllerTrabajos.getItem)

// POST requests
router.post('/', controllerTrabajos.createItem)

// PUT requests
router.put('/', controllerTrabajos.updateItem)

// DELETE requests
router.put('/', controllerTrabajos.deleteItem)

module.exports = router