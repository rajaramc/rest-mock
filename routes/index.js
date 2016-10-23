var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.use('/ispu/nearby', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ispu/nearby', function(req, res){
	res.status(200).json({"sku":"123456","stores":[{"storeId":1},{"storeId":2}]});
} );

module.exports = router;
