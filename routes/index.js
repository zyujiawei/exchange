var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
	axios.get('http://localhost:3000/api/user')
		.then( (response)=> {
			console.log(response.data);
			let userArray = [];
			response.data.user.map((index)=>{
				userArray.push(index);
			});			
			res.render('index', { userData: userArray });
		})
		.catch( (err)=> {
			console.log(err)
		});

	
	//res.render('index', { userData: userArray });

  //res.render('index', { title: 'Express' });
});

module.exports = router;
