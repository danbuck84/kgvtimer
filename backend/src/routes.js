const express = require('express')

const SessionController = require('./controllers/SessionController')
const DriverController = require('./controllers/DriverController')
const DashboardController = require('./controllers/DashboardController')
const TimingController = require('./controllers/TimingController')

const routes = express.Router()

routes.post('/sessions', SessionController.store)

routes.get('/drivers', DriverController.index)
routes.post('/drivers', DriverController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/drivers/:driver_id/timing', TimingController.store)

module.exports = routes
