import express from 'express'
import loginController from '../controllers/login'

const route = express.Router()

route.get('/login', loginController)

route.get('/healthz', (req, res) => {
  res.status(200).send('OK')
})

export default route
