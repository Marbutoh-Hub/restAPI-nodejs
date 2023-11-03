const express = require('express');
const usersController = require('../controllers/usersControllers');
const router = express.Router();

router.get('/',usersController.userGetAll);
router.get('/:idUser',usersController.userFetch)
router.post('/',usersController.userPost);
router.patch('/:idUser',usersController.userUpdate);
router.delete('/:idUser',usersController.userDelete);


module.exports = router;