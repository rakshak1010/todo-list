var express = require('express');
var router = express.Router();

let list = require('../controllers/list');
let custom = require('../controllers/custom');

router.get('/', list.showList);

router.get('/:customListName', custom.showList);

router.post('/delete', list.deleteItem);

router.post('/', list.addItem);

module.exports = router;
