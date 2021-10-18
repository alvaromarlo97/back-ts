const { Router } = require('express');

const createOne = require('../server/server');

const userRouter = new Router();

userRouter
  .route('/')
  .post(createOne);

module.exports = userRouter;
