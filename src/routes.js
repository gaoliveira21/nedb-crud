const { Router } = require('express');
const UserRepository = require('./app/repository/UserRepository');

const routes = Router();

routes.post('/users', async (request, response) => {
  const payload = request.body;

  const user = await UserRepository.create(payload);

  return response.json(user);
})

routes.get('/users', async (_, response) => {
  const users = await UserRepository.find();
  return response.json(users);
})

routes.get('/users/:id', async (request, response) => {
  const _id = request.params.id;

  const user = await UserRepository.findOne({ _id });

  return response.json(user)
})

routes.put('/users/:id', async (request, response) => {
  const _id = request.params.id;

  await UserRepository.update({ _id }, request.body);

  return response.status(204).json();
})

routes.delete('/users/:id', async (request, response) => {
  const _id = request.params.id;

  await UserRepository.destroy({ _id });

  return response.status(204).json()
})

module.exports = routes;
