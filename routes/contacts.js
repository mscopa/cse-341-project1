const express = require('express');
const router = express.Router();


const contactsController = require('../controllers/contacts');
const validation = require('../middleware/validation');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
router.post('/', validation.validateContact, contactsController.createContact);
router.put('/:id', validation.validateContact, contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;