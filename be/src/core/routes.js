import { Router } from 'express';
import enableWs from '@small-tech/express-ws';

import { INDEX_NAME } from '~/env';
import restfulApi from '~/restful-api';
// import authentication from '~/authentication';
// import fileUploads from '~/file-uploads';
// import realtimeData from '~/realtime-data';

const router = Router();
enableWs(router);

router.get('/', (req, res) => {
  res.send(`app-root, ${INDEX_NAME} mode`);
});

router.use(restfulApi.prefix, restfulApi);
// router.use(crudOperations.prefix, crudOperations);
// router.use(authentication.prefix, authentication);
// router.use(fileUploads.prefix, fileUploads);
// router.use(realtimeData.prefix, realtimeData);

export default router;
