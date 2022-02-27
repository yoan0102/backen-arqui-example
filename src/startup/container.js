const { createContainer, asValue, asClass, asFunction } = require('awilix')

// config
const app = require('.')
const config = require('../config')

// Services
const { HomeService } = require('../services')

// Controllers
const { HomeController } = require('../controllers')

// Routes
const Routes = require('../routes')
const { HomeRoutes } = require('../routes/index.routes')

const container = createContainer()

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })

module.exports = {
  container,
}
