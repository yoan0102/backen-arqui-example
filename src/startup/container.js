const { createContainer, asValue, asClass, asFunction } = require('awilix')

// config
const app = require('.')
const config = require('../config')

// Services
const { HomeService, UserService, CommentService, IdeaService, AuthService } = require('../services')


// Controllers
const { HomeController, UserController, IdeaController, CommentController, AuthController } = require('../controllers')

// Routes
const Routes = require('../routes')
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes')

// Models
const { User, Comment, Idea } = require('../models')

// Repositories
const { CommentRepository, IdeaRepository, UserRepository } = require('../repositories')

const container = createContainer()

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController).bind(UserController).singleton(),
    IdeaController: asClass(IdeaController).bind(IdeaController).singleton(),
    CommentController: asClass(CommentController).bind(CommentController).singleton(),
    AuthController: asClass(AuthController).bind(AuthController).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  })

module.exports = {
  container,
}
