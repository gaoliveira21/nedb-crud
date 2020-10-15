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

routes.delete('/users/:id', (request, response) => {
  const _id = request.params.id;

  db.remove({ _id }, {}, (err) => {
    if (err) return response.status(400).json({ error: 'Fails on remove user' })

    return response.status(204).json()
  })
})

module.exports = routes;
