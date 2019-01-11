var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM students', function (error, results, fields) {
		if (error) {
      next(error)
    } else {
      res.send(JSON.stringify(results))
    }
	})
})

router.post('/', function(req, res, next) {
  connection.query('INSERT INTO students (name) VALUES(?)', [req.body.name], function (error, results, fields) {
		if(error){
      next(error);
    } else {
      res.send();
    }
	})
})

router.put('/:id', function(req, res, next) {
  connection.query('UPDATE students SET name = ? WHERE id = ?', [req.body.name, req.params.id], function (error, results, fields) {
		if(error){
      next(error);
    } else {
      res.send();
    }
	})
})

router.delete('/:id', function(req, res, next) {
  connection.query('DELETE FROM students WHERE id = ?', [req.params.id], function (error, results, fields) {
		if (error) {
      next(error)
    } else {
      res.send();
    }
	})
})

module.exports = router;
