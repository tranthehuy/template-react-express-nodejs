import { Router } from 'express';

import service from './service';

const controller = (() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json({ data: service.sayHello(req.body.data) });
  });

  return router;
})();

controller.prefix = '/hello-world';

export default controller;
