const { Router } = require('express');
const router = Router();

const { getPersonas, createPersona } = require('../controllers/personaCRUD');

router.get('/persona', getPersonas);
router.post('/persona', createPersona);


module.exports = router;