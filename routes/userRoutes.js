const express = require('express')
const { addUserData, getUsers, destroyAllUsers, deleteUser, updateUsers } = require('../controller/userController')

const router = express.Router()

router
  .post('/add-user', addUserData)
  .get('/', getUsers)
  .put('/update-user/:id', updateUsers)
  .delete('/delete-user/:id', deleteUser)
  .delete('/destroy', destroyAllUsers)


  
module.exports = router