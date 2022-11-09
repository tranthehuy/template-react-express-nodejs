import { Router } from 'express';

import service from './service';

const controller = (() => {
  const router = Router();

  router.get('/', async (req, res) => {
    if (service[req.query.name]) {
      service[req.query.name](req, res);
    } else {
      res.send('not_found');
    }
  });

  router.get('/run', async (req, res) => {
    service.run(req, res);
  });

  return router;
})();

controller.prefix = '/api/scripts';

export default controller;
