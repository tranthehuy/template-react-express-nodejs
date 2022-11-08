import { Router } from 'express';

import service from './service';

const controller = (() => {
  const router = Router();

  router.get('/', async (req, res) => {
    // res.json({ data: service.sayHello(req.body.data) });
    if (service[req.query.name]) {
      service[req.query.name](req, res);
    } else {
      res.send('not_found');
    }
  });

  return router;
})();

controller.prefix = '/api/scripts';

export default controller;
