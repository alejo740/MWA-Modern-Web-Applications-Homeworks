{
  const axios = require('axios')
  const express = require('express');
  const router = express.Router();

  /* GET users listing. */
  router.get('/', async function (req, res, next) {
    try {
      let responseObj = await axios.get('http://jsonplaceholder.typicode.com/users/');
      console.log(responseObj.data)
      res.render('users', { userList: responseObj.data });
    } catch (err) {
      next(err);
    }
    res.end();
  });

  module.exports = router;
}